<template>
  <div>
    <el-dialog class="dialogClass" :visible.sync="chooseSizeDialog" width="30%" append-to-body>
      <header style="padding-bottom: 20px">
        <div>
          <img src="../../assets/img/sneaker.jpeg" width="60">
        </div>
        <div>
          <label>请选择尺码</label>
        </div>
      </header>
      <el-row>
        <el-col :span="6" v-for="i in size" :key="i" style="margin-top: 10px">
          <el-button class="sizeButton" @click="confirmSize(i)">{{ i }}</el-button>
        </el-col>
      </el-row>
      <div>
        <el-button type="primary" @click="deliverOrder"
                   style="width: 100%;background-color: black;border-color: black;margin-top: 15px">提 交 订 单
        </el-button>
      </div>
    </el-dialog>
    <!-- 滑动显示面板 -->
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
        <img src="../../assets/img/AJ5StealthWB.jpeg" width="50%">
      </el-carousel-item>
    </el-carousel>

    <el-row :gutter="15">
      <el-col :span="8" v-for="(item,i) in shoes" :key="i">
        <el-card :body-style="{ padding: '10px' }">
          <img :src="require('../../assets/img/'+item.sneakerItem.image)" class="image">
          <div style="padding: 14px;">
            <span>{{ item.sneakerItem.name }}</span>
            <div class="bottom clearfix">
              <div>
                <label style="font-size: 10px;font-weight: 400;color: gray">开始时间 </label>
                <time class="time">{{ item.startTime }}</time>
              </div>
              <div>
                <label style="font-size: 10px;font-weight: 400;color: gray">结束时间 </label>
                <time class="time">{{ item.endTime }}</time>
              </div>
              <el-button v-if="new Date(item.startTime) <= currentDate && new Date(item.endTime) >= currentDate" @click="chooseSize(item)" type="text" class="button">立刻抢购</el-button>
              <el-button v-else type="text" class="button" disabled>活动未开放</el-button>
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
      shoes: [],
      chooseSizeDialog: false,
      size: [],
      dto: {
        itemId: '',
        shoeSize: ''
      }
    };
  },
  mounted() {
    this.loadItems()
  },
  methods: {
    loadItems() {
      this.$axios.get('/item/all').then(resp => {
        if (resp && resp.data.code === 200) {
          this.shoes = resp.data.result
        }
      })
    },
    chooseSize(item) {
      this.dto.itemId = item.itemId
      // size形式如 35,36,37,38,39
      this.size = item.sneakerItem.size.split(",")
      this.chooseSizeDialog = true
    },
    deliverOrder() {
      this.chooseSizeDialog = false
      this.$axios.post('/item/order', {
        itemId: this.dto.itemId,
        size: this.dto.shoeSize
      },{
        headers: {
          "Authorization": localStorage.getItem("SKtoken")
        }
      }).then(resp => {
        if (resp && resp.data.code === 200) {
          this.$message({
            message: '订单提交成功,我们将尽快处理您的订单',
            type: 'success'
          })
        } else {
          this.$store.commit('logout')
          this.$message.error(resp.data.message)
        }
      })
    },
    confirmSize(size) {
      this.dto.shoeSize = size;
    }
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
