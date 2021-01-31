const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const db = require('../models');
const User = db.users;

passport.use('signup', 
    new localStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        async (email, password, done) => {
            try {
                const foundUser = await User.findOne({where: { 
                    email: email
                }})
                // make sure there is no duplicated emails, doing it here instead of model level to check before ecnrypting password
                if (foundUser) {
                    return done(null, false, { message: 'User already exsists' });
                }
                const user = await User.create({ email, password });
                return done(null, user);
            } catch (error) {
                done(error);
            }
        }
    )
);

passport.use('login', 
    new localStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        async (email, password, done) => {
            try {
            const foundUser = await User.findOne({where: { 
                email: email
            }});
            if (!foundUser) {
                return done(null, false, { message: 'User not found' });
            }
            const validate = await foundUser.isValidPassword(password, foundUser);
            if (!validate) {
                return done(null, false, { message: 'Wrong password' });
            }
            return done(null, foundUser, { message: 'Logged in successfully' });
            } catch (error) {
                return done(error);
            }
        }
    )
);

// adding routes validation

const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use(
  new JWTstrategy(
    {
      secretOrKey: 'SECRET_KEY',
      jwtFromRequest: ExtractJWT.fromUrlQueryParameter('token')
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);