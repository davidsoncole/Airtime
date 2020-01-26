<template>
    <div>
        <v-toolbar flat>
            <v-toolbar-title>
                <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                    <span v-on="on" class="manager_number white--text">+234 000 0000 0000</span>
                </template>
                <span>Account Manager</span>
                </v-tooltip>
                
                <v-avatar style="width:32px; height:32px;">
                    <img
                        class="manager_img"
                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                        alt="John"
                        style="border-radius: 2px; margin-left: auto;"
                    >
                </v-avatar>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <template v-if="$vuetify.breakpoint.smAndUp">
                <span>Unogu Davidson</span>
                <v-avatar style="width:32px; height:32px; margin-right: 20px;">
                    <img
                        class="manager_img"
                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                        alt="John"
                        style="border-radius: 5px; margin-left: auto;"
                    >
                </v-avatar>

                <v-dialog v-model="dialog" persistent max-width="290">
                <template v-slot:activator="{ on }">
                    <v-btn icon text v-on="on"><v-icon>mdi-exit-to-app</v-icon></v-btn>
                </template>
                
                
                <v-card>
                    <v-card-title class="headline">Logout</v-card-title>
                    <v-card-text>Lorem ipsum dolor sit amet, ipsum pulvinar suscipit, etiam interdum mattis eget nulla.</v-card-text>
                    <v-card-actions>
                    
                    <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </template>
        </v-toolbar>
    </div>
</template>


<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>

<style scoped>

.v-toolbar__title {
    background-color: #FAB300;
    padding-left: 1rem;
    border-radius: 5px;
}

.manager_number {
    font-size: .8rem;
}

</style>