let data = [
  {
    scr1:'../images/吉林山东.jpg',
    time:'03.07',
    title:'吉林山东',
    decice:'DJI Mavic3',
    read:'已阅：758',
    good:'点赞：24',
    src2:'../images/头像.jpg',
    date:'2022.12.11'
  },
  {
    scr1:'../images/风车云海.jpg.jpg',
    time:'03.07',
    title:'风车云海',
    decice:'DJI Mavic3',
    read:'已阅：758',
    good:'点赞：24',
    src2:'../images/头像.jpg',
    date:'2022.12.11'
  },
  {
    scr1:'../images/北戴河鸽子窝.jpg',
    time:'03.07',
    title:'北戴河鸽子窝',
    decice:'DJI Mavic3',
    read:'已阅：758',
    good:'点赞：24',
    src2:'../images/头像.jpg',
    date:'2022.12.11'
  },
  {
    scr1:'../images/Fishing anchovies in Hon Yen~.jpg',
    time:'03.07',
    title:'Fishing anchovies in Hon Yen~',
    decice:'DJI Mavic3',
    read:'已阅：758',
    good:'点赞：24',
    src2:'../images/头像.jpg',
    date:'2022.12.11'
  }
]
for(let i = 0;i<data.length;i++){
  document.write(`
  <li>
  <div class="pic-box" href="#">
      <img class="pic" src="${data[i].scr1}" >
      <span class="time">03:07</span>
      <div class="shadow"></div>
      <div class="start"></div>
  </div>
  <div class="info-box">
      <a class="overflow" href="#">吉林东山</a>
      <p class="device">设备：<a href="#">DJI Mavic3</a></p>
      <p class="count"><span>已阅：758</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="star">点赞：24</span></p>
      <hr>
      <div class="user-info">
          <a href="#">
              <img class="pic-people" src="../images/头像.jpg" alt="">
              <span class="name">zhangpingcloud</span>
          </a>
          <span class="date">2022年12月11日</span>
      </div>
  </div>
</li>
  `)
}