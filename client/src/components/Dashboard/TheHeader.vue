<template>
    <div>
        <Menubar :model="items" class="header">
            <template #end>
                <div class="header__name">
                    <span>
                        <i class="pi pi-user" style="fontSize: 1.8rem"/>
                    </span>
                    <Button @click="logout" label="Logout" icon="pi pi-sign-out" :style="{'margin-left': '0 .5em'}"/>
                </div>
            </template>
        </Menubar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                   label:'File',
                   icon:'pi pi-fw pi-file',
                   items:[
                      {
                         label:'New',
                         icon:'pi pi-fw pi-plus',
                         items:[
                            {
                               label:'Bookmark',
                               icon:'pi pi-fw pi-bookmark'
                            },
                            {
                               label:'Video',
                               icon:'pi pi-fw pi-video'
                            },

                         ]
                      },
                      {
                         label:'Delete',
                         icon:'pi pi-fw pi-trash'
                      },
                      {
                         separator:true
                      },
                      {
                         label:'Export',
                         icon:'pi pi-fw pi-external-link'
                      }
                   ]
                },
                {
                   label:'Users',
                   icon:'pi pi-fw pi-user',
                   items:[
                      {
                         label:'New',
                         icon:'pi pi-fw pi-user-plus',

                      },
                      {
                         label:'Delete',
                         icon:'pi pi-fw pi-user-minus',

                      },
                      {
                         label:'Search',
                         icon:'pi pi-fw pi-users',
                         items:[
                            {
                               label:'Filter',
                               icon:'pi pi-fw pi-filter',
                               items:[
                                  {
                                     label:'Print',
                                     icon:'pi pi-fw pi-print'
                                  }
                               ]
                            },
                            {
                               icon:'pi pi-fw pi-bars',
                               label:'List'
                            }
                         ]
                      }
                   ]
                },
                {
                   label:'Events',
                   icon:'pi pi-fw pi-calendar',
                   items:[
                      {
                         label:'Edit',
                         icon:'pi pi-fw pi-pencil',
                         items:[
                            {
                               label:'Save',
                               icon:'pi pi-fw pi-calendar-plus'
                            },
                            {
                               label:'Delete',
                               icon:'pi pi-fw pi-calendar-minus'
                            },

                         ]
                      },
                      {
                         label:'Archieve',
                         icon:'pi pi-fw pi-calendar-times',
                         items:[
                            {
                               label:'Remove',
                               icon:'pi pi-fw pi-calendar-minus'
                            }
                         ]
                      }
                   ]
                }
             ]
        }
    },
    methods: {
        logout() {
            this.$store.commit('deauthenticate', this.$cookie)
            this.$toast.add({severity:'warn', summary: 'Login', detail:'You have logged out.', life: 5000});
            return this.$nextTick(() => {
                this.$router.push({ path: '/' })
            })
        }
    }
}
</script>

<style lang="scss" scoped>

::v-deep(.pi-bars) {
    font-size: 1.8rem;
}
.header {
    padding: 0.5rem 2rem 0.5rem 1rem;
    &__name {
        display: flex;
        align-items: center;
        span {
            margin: 0 2rem;
        }
    }
}
</style>