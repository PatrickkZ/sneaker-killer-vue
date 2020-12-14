<template>
  <div>
    <el-dialog class = "dialogClass" :visible.sync="chooseSizeDialog" width="30%" append-to-body>
      <header style="padding-bottom: 20px">
        <div>
          <img src="../../assets/img/sneaker.jpeg" width="60">
        </div>
        <div>
          <label>请选择尺码</label>
        </div>
      </header>
      <el-row>
        <el-col :span="6" v-for="i in 13" :key="i" style="margin-top: 10px">
          <el-button class="sizeButton">{{34+i}}</el-button>
        </el-col>
<!--        <el-button class="sizeButton">35</el-button>-->
<!--        <el-button class="sizeButton">36</el-button>-->
<!--        <el-button class="sizeButton">37</el-button>-->
<!--        <el-button class="sizeButton">38</el-button>-->
<!--        <el-button class="sizeButton">39</el-button>-->
      </el-row>
<!--      <el-row style="margin-top: 10px">-->
<!--        <el-button class="sizeButton">40</el-button>-->
<!--        <el-button class="sizeButton">41</el-button>-->
<!--        <el-button class="sizeButton">42</el-button>-->
<!--        <el-button class="sizeButton">43</el-button>-->
<!--        <el-button class="sizeButton">44</el-button>-->
<!--      </el-row>-->
<!--      <el-row style="margin-top: 10px">-->
<!--        <el-button class="sizeButton">45</el-button>-->
<!--        <el-button class="sizeButton">46</el-button>-->
<!--        <el-button class="sizeButton">47</el-button>-->
<!--      </el-row>-->
      <div>
        <el-button type="primary" @click="chooseSizeDialog = false" style="width: 100%;background-color: black;border-color: black;margin-top: 15px">提 交 订 单</el-button>
      </div>
<!--      <div style="padding-top: 10px;font-size: 8px;font-weight: 300;color: gray">-->
<!--        还不是会员？-->
<!--        <el-button @click="loginDialog = false;registerDialog = true" type="text" style="font-size: 8px;font-weight: 400;color: black">加入我们</el-button>-->
<!--      </div>-->
    </el-dialog>
      <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item>
          <img src="../../assets/img/AJ1VoltGold.jpeg" width="50%">
          <img src="../../assets/img/AJ1NotForResale.jpeg" width="50%">
        </el-carousel-item>
        <el-carousel-item>
          <img src="../../assets/img/AJ1UniversityBlue.jpeg" width="50%">
          <img src="../../assets/img/AJ1MetallicSilver.jpeg" width="50%">
        </el-carousel-item>
        <el-carousel-item>
          <img src="../../assets/img/AJ4UniversityBlue.jpeg" width="50%">
          <img src="../../assets/img/AJ5White.jpeg" width="50%">
        </el-carousel-item>
      </el-carousel>
    <el-row :gutter="15">
      <el-col :span="8" v-for="(item,i) in shoes" :key="i">
        <el-card :body-style="{ padding: '10px' }">
          <img :src="require('../../assets/img/'+item.picture)" class="image">
          <div style="padding: 14px;">
            <span>{{item.name}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button @click="chooseSizeDialog = true" type="text" class="button">立刻抢购</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "SneakerMain",
  data() {
    return {
      currentDate: new Date(),
      shoes: [
        {
          name: "Air Jordan 1 High OG 'Volt Gold'",
          picture: "AJ1VoltGold.jpeg"
        },
        {
          name: "Air Jordan 1 High OG 'University Blue'",
          picture: "AJ1UniversityBlue.jpeg"
        },
        {
          name: "Air Jordan 1 High OG 'Metallic Silver'",
          picture: "AJ1MetallicSilver.jpeg"
        },
        {
          name: "Air Jordan 4 'University Blue'",
          picture: "AJ4UniversityBlue.jpeg"
        },
        {
          name: "Air Jordan 1 High OG 'NOT FOR RESALE'",
          picture: "AJ1NotForResale.jpeg"
        },
      ],
      chooseSizeDialog: false
    };
  },
  methods: {
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
.sizeButton:hover {
  background: black;
  color: white;
  border-color: black;
}
.sizeButton:active {
  background: black;
  color: white;
  border-color: black;
}
.sizeButton:focus {
  background: black;
  color: white;
  border-color: black;
}
</style>
