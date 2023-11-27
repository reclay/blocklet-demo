<template>
  <div class="profile__wrapper">
    <h2>个人信息</h2>
    <el-form label-width="80" label-position="right" :model="form">
      <el-form-item
        label="用户名"
        prop="name"
        :rules="[
          {
            required: true,
            message: '用户名不能为空',
            trigger: 'blur',
          },
        ]">
        <el-input v-model="form.name" v-show="edit"></el-input>
        <span v-show="!edit">{{ form.name || '-' }}</span>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.mail" v-show="edit"></el-input>
        <span v-show="!edit">{{ form.mail || '-' }}</span>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="form.phone" v-show="edit"></el-input>
        <span v-show="!edit">{{ form.phone || '-' }}</span>
      </el-form-item>
    </el-form>
    <div class="profile__action">
      <el-button v-show="!edit" type="primary" icon="Edit" @click="edit = true" />
      <el-button v-show="edit" type="primary" @click="handleSave">保存</el-button>
    </div>
  </div>
</template>

<script>
import { genRandomName } from '../util/index.js';
const storageKey = 'userProfileV1';
export default {
  data() {
    return {
      edit: false,
      form: {
        name: '',
        mail: '',
        phone: '',
      },
      saving: false,
    };
  },
  methods: {
    handleSave() {
      if (this.saving) return;
      if (!this.form.name) return;
      this.saving = true;
      localStorage.setItem(storageKey, JSON.stringify(this.form));
      this.edit = false;
      this.saving = false;
    },
    initData() {
      let localInfo = '';
      try {
        localInfo = JSON.parse(localStorage.getItem(storageKey));
      } catch (err) {
        console.error(err);
      }
      if (!localInfo || typeof localInfo !== 'object' || !localInfo.name) {
        localInfo = {
          name: genRandomName(),
        };
        localStorage.setItem(storageKey, JSON.stringify(localInfo));
      }
      this.form = {
        name: localInfo.name,
        mail: localInfo.mail || '',
        phone: localInfo.phone || '',
      };
    },
  },
  created() {
    this.initData();
  },
};
</script>

<style lang="scss">
.profile__ {
  &wrapper {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
  }
  &action {
    text-align: right;
  }
}
</style>
