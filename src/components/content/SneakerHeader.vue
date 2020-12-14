<template>
  <div>
    <el-dialog class = "dialogClass" :visible.sync="loginDialog" width="30%" append-to-body>
      <header style="padding-bottom: 20px">
        <div>
          <img src="../../assets/img/sneaker.jpeg" width="60">
        </div>
        <div>
          <label>登录SNEAKER KILLER账号</label>
        </div>
      </header>
      <el-form :model="form">
        <el-form-item>
          <el-input v-model="form.name" placeholder="电子邮箱" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.name" placeholder="密码" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
        <div>
          <el-button type="text" style="float: left;padding-top: 0;color: grey;font-weight: 400">忘记密码？</el-button>
        </div>
        <div>
          <el-button type="primary" @click="loginDialog = false" style="width: 100%;background-color: black;margin-top: 15px">登 录</el-button>
        </div>
      <div style="padding-top: 10px;font-size: 8px;font-weight: 300;color: gray">
        还不是会员？
        <el-button @click="loginDialog = false;registerDialog = true" type="text" style="font-size: 8px;font-weight: 400;color: black">加入我们</el-button>
      </div>
    </el-dialog>

    <el-dialog class = "dialogClass" :visible.sync="registerDialog" width="30%" append-to-body>
      <header style="padding-bottom: 20px">
        <div>
          <img src="../../assets/img/sneaker.jpeg" width="60">
        </div>
        <div>
          <label>注册成为SNEAKER会员</label>
        </div>
      </header>
      <el-form :model="form">
        <el-form-item>
          <el-input v-model="form.name" placeholder="电子邮箱" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.name" placeholder="密码" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.name" placeholder="确认密码" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div>
        <el-button type="primary" @click="registerDialog = false" style="width: 100%;background-color: black;margin-top: 15px">注 册</el-button>
      </div>
      <div style="padding-top: 10px;font-size: 8px;font-weight: 300;color: gray">
        已经是会员？
        <el-button @click="registerDialog = false;loginDialog=true" type="text" style="font-size: 8px;font-weight: 400;color: black">立即登录</el-button>
      </div>
    </el-dialog>

    <div class="header1" style="z-index: 10">
      <div class="header1 inner">
        <div style="padding-top: 4px;float: left;font-size: 25px;font-family:'American Typewriter';font-style: italic">
          <label>SNEAKER KILLER</label>
        </div>
        <el-button type="text" style="color: black;width: 50px;float: right;font-weight: 400">帮助</el-button>
        <el-button @click="loginDialog = true" type="text" style="color: black;width: 50px;float: right;font-weight: 400">登陆</el-button>
      </div>
    </div>
    <div class="header2">
      <div class="header2 inner">
        <img src="../../assets/img/sneaker.jpeg" width="60px" style="float: left">
          <el-button icon="el-icon-search " circle style="position: relative;float: right;margin-top: 10px;border-color: white;"></el-button>
        <el-input class="inputClass" placeholder="搜索" style="width: 20%;padding-top: 10px;position: relative;float: right;"></el-input>
      </div>
    </div>
    <div class="header1" style="margin-top: 96px">
      <div style="padding-top: 4px">
        <label style="font-size: 15px;font-weight: 300">限量球鞋限时抢购</label>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "SneakerHeader",
  data() {
    return {
      loginDialog: false,
      registerDialog: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    };
  }
}
</script>

<style>
.header1 {
  position: fixed;
  background: #f5f5f5;
  height: 36px;
  text-align: center;
  width: 100%;
}

.header1.inner {
  padding-left: 38px;
  padding-right: 36px;
  width: 95%;
}

.header2 {
  background: white;
  position: fixed;
  height: 60px;
  width: 100%;
  padding-top: 36px;
}
.header2.inner {
  padding-top: 0;
  padding-left: 38px;
  padding-right: 36px;
  width: 95%;
}
.inputClass .el-input__inner {
  border-radius: 50px;
  background-color: #f5f5f5;
}
.dialogClass .el-dialog__body {
  padding: 50px;
  padding-bottom: 20px;
  padding-top: 0;
  font-size: 20px;
  text-align: center;
  font-family: "Helvetica";
  font-weight: 700;
  color: black;
}

.dialogClass .el-dialog__body .el-form-item {
  margin-bottom: 10px;
}

.forgetButton {
  padding-top: 0;
}
</style>
