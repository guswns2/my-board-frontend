<script setup lang="ts">
import {reactive} from "vue";

const data = {
  form: reactive({
    id: '',
    pw: ''
  })
}
</script>

<template>
  <div class="g-view-container">
    <div class="g-view-main">
      <v-row>
        <v-col>
          <v-card class="g-content-card login-card">
            <v-form>
              <v-row class="form-row">
                <v-col class="form-col">
                  <v-text-field
                      v-model="data.form.id"
                      label="ID"
                      :rules="[(value) => !!value || '아이디는 필수입니다.']"
                      variant="outlined"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="form-row">
                <v-col class="form-col">
                  <v-text-field
                      v-model="data.form.pw"
                      label="Password"
                      :rules="[(value) => !!value || '비밀번호는 필수입니다.']"
                      variant="outlined"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row class="form-row">
                <v-col class="form-col">
                  <v-btn type="submit" class="login-btn">Login</v-btn>
                </v-col>
              </v-row>
              <v-row class="form-row">
                <v-col class="form-col">
                  <v-btn type="submit" color="yellow" class="login-btn">Kakao Login</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style scoped>
.login-card {
  width: 400px;
  height: 400px;
}
.login-btn {
  width: 100%;
}
</style>
