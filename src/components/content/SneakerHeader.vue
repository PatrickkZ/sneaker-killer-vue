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
      <el-form :model="loginDto">
        <el-form-item>
          <el-input v-model="loginDto.username" placeholder="用户名" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="loginDto.password" placeholder="密码" autocomplete="off" type="password"></el-input>
        </el-form-item>
      </el-form>
      <div>
        <label style="float: right;padding-top: 0;color: red;font-weight: 400;font-size: 10px">{{loginHint}}</label>
      </div>
        <div>
          <el-button type="text" style="float: left;padding-top: 0;color: grey;font-weight: 400">忘记密码？</el-button>
        </div>
        <div>
          <el-button type="primary" @click="login" style="width: 100%;background-color: black;margin-top: 15px">登 录</el-button>
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
      <el-form :model="registerDto">
        <el-form-item>
          <el-input v-model="registerDto.username" placeholder="用户名 (字母、数字、下划线)" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="registerDto.email" placeholder="电子邮箱" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="registerDto.password" placeholder="密码 (字母、数字)" autocomplete="off" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="registerDto.confirmPass" placeholder="确认密码" autocomplete="off" type="password"></el-input>
        </el-form-item>
      </el-form>
      <div>
        <label style="float: left;padding-top: 0;color: red;font-weight: 400;font-size: 10px">{{hint}}</label>
      </div>
      <div>
        <el-button type="primary" @click="register" style="width: 100%;background-color: black;margin-top: 15px">注 册</el-button>
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
        <el-button @click="toHome" type="text" style="color: black;width: 50px;float: right;font-weight: 400">主页</el-button>
        <el-button v-if="userLogin === false" @click="loginDialog = true" type="text"
                   style="color: black;width: 50px;float: right;font-weight: 400">登陆
        </el-button>
        <el-button v-if="userLogin === true" @click="logout" type="text" style="color: gray;width: 70px;float: right;font-weight: 400">退出登录</el-button>
        <el-button v-if="userLogin === true" @click="myOrder" type="text" style="color: black;width: 70px;float: right;font-weight: 500">我的订单</el-button>

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
      formLabelWidth: '120px',
      hint: '',
      loginHint: '',
      registerDto: {
        username: '',
        email: '',
        password: '',
        confirmPass: ''
      },
      loginDto: {
        username: '',
        password: ''
      }
    };
  },
  computed: {
    userLogin() {
      return this.$store.state.token !== null
    }
  },
  methods: {
    register() {
      // 非空校验
      if(this.registerDto.username === ''){
        this.hint = '请输入用户名'
        return
      }
      if(this.registerDto.email === ''){
        this.hint = '请输入邮箱'
        return
      }
      if(this.registerDto.password === ''){
        this.hint = '请输入密码'
        return
      }
      if(this.registerDto.confirmPass === ''){
        this.hint = '请输入确认密码'
        return
      }
      // 合法性校验
      let usernameReg = /^[a-zA-Z0-9]\w{5,17}$/
      if(!usernameReg.test(this.registerDto.username)){
        this.hint = '用户名不合法'
        return
      }
      let emailReg = /^[0-9a-zA-Z]+\w*@([0-9a-z]+\.)+[0-9a-z]+$/
      if(!emailReg.test(this.registerDto.email)){
        this.hint = '邮箱格式不合法'
        return
      }
      let passReg = /^[a-zA-Z0-9]{6,16}$/
      if(!passReg.test(this.registerDto.password)){
        this.hint = '密码格式不合法'
        return
      }
      if(this.registerDto.password !== this.registerDto.confirmPass){
        this.hint = '两次输入的密码不一致'
        return
      }
      this.hint = ''
      this.$axios.post('/sk/register', {
        username: this.registerDto.username,
        email: this.registerDto.email,
        password: this.registerDto.password
      }).then(resp => {
        if (resp && resp.data.code === 200) {
          this.$message({
            message: '注册成功',
            type: 'success'
          })
        } else {
          this.$message.error(resp.data.message)
        }
      })
    },
    login() {
      // 非空校验
      if(this.loginDto.username === ''){
        this.loginHint = '请输入用户名'
        return
      }
      if(this.loginDto.password === ''){
        this.loginHint = '请输入密码'
        return
      }

      let usernameReg = /^[a-zA-Z0-9]\w{5,17}$/
      if(!usernameReg.test(this.loginDto.username)){
        this.loginHint = '用户名不存在'
        return
      }
      let passReg = /^[a-zA-Z0-9]{6,16}$/
      if(!passReg.test(this.loginDto.password)){
        this.loginHint = '密码错误'
        return
      }

      this.loginHint = ''
      this.$axios.post('/sk/login', {
        username: this.loginDto.username,
        password: this.loginDto.password
      }).then(resp => {
        if (resp && resp.data.code === 200) {
          this.$message({
            message: '登录成功',
            type: 'success'
          })
          this.userLogin = true;
          this.loginDialog = false;
          const token = resp.data.result;
          this.$store.commit('login', token)
        } else {
          this.$message.error(resp.data.message)
        }
      })
    },
    myOrder(){
      this.$router.replace('/sneaker-killer/center')
    },
    toHome(){
      this.$router.replace('/sneaker-killer/home')
    },
    logout(){
      this.$store.commit('logout')
      this.$router.replace('/sneaker-killer/home')
    }
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
