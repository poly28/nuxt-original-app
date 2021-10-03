<template>
  <div>
    <v-app-bar color="gray accent-1">
      <v-toolbar-title>Web Note</v-toolbar-title>

      <div class="flex-grow-1"></div>
      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>実績記録</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>実績一覧</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>ログアウト</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
