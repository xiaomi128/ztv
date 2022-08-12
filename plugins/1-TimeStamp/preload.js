const nowtimeBox = document.getElementById('convertBox').getElementsByTagName('div')[0].getElementsByTagName('span')[1];
const UnixtoTime = document.getElementById('convertUnixtoTime');
const showconvertedTime = document.getElementById('showone').getElementsByTagName('span')[0];
const datePicker = document.getElementById('datePicker');
const timeToUnix = document.getElementById('timeToUnix');
const hms = document.getElementById('hms');
const result = document.getElementById('result');
const copy = document.getElementById('copy');
const panel = document.getElementById('panel1');
const panelSpan = document.getElementById('panelSpan');
const currentUnix = document.getElementById('currentUnix').getElementsByTagName('span')[1];
const currentUnixText = document.getElementById('currentUnix').getElementsByTagName('span')[0];
const pausebtn = document.getElementById('pause');
const resetbtn = document.getElementById('resetbtn');
const addhms = document.getElementById('addhms');
const fulltimeToUnix = document.getElementById('fulltimeToUnix');

let selectedTime;
let selectedhms;
let fulltime;
let resultofTime;
//暂停初始状态
let taped = false;
let onlyConvertDate = false;
//1.顶部及当前时间戳部分
// 实时显示当前时间
function gettime() {
  //获取时间对象
  var dd = new Date();
  //获取年月日，时分秒
  var y = dd.getFullYear();
  var m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1;
  var d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate();
  var h = dd.getHours();
  var i = dd.getMinutes() < 10 ? '0' + dd.getMinutes() : dd.getMinutes();
  var s = dd.getSeconds() < 10 ? '0' + dd.getSeconds() : dd.getSeconds();
  var wkday = dd.getDay();
  nowtimeBox.innerHTML = y + '年' + m + '月' + d + '日' + '   ' + h + ':' + i + ':' + s + ' ' + '星期' + '日一二三四五六'.charAt(wkday);
}
let getcurrenttime = setInterval(() => {
  gettime();
});
//防止出现闪动
getcurrentUnix();
function getcurrentUnix() {
  const t1 = new Date().valueOf();
  currentUnix.innerHTML = t1;
}
let timer = setInterval(() => {
  getcurrentUnix();
}, 1000);
//2.时间戳转时间戳部分
//时间戳转时间函数
function happenTimeFun(num) {
  let count = 0;
  for (var i of num) {
    count++;
  }
  //时间戳为10位需要乘1000
  if (count <= 10) {
    num *= 1000;
  }

  //时间戳数据处理
  let date = new Date(parseInt(num));
  //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let y = date.getFullYear();
  let MM = date.getMonth() + 1;
  MM = MM < 10 ? '0' + MM : MM; //月补0
  let d = date.getDate();
  d = d < 10 ? '0' + d : d; //天补0
  let h = date.getHours();
  h = h < 10 ? '0' + h : h; //小时补0
  let m = date.getMinutes();
  m = m < 10 ? '0' + m : m; //分钟补0
  let s = date.getSeconds();
  s = s < 10 ? '0' + s : s; //秒补0
  return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
}
//时间戳转时间转换按钮
UnixtoTime.addEventListener('click', function () {
  //每次重置之后带有panel2属性，需要删除
  panel.classList.remove('panel2');
  const insertContent = document.getElementById('insertContent').value;
  // console.log(parseInt(insertContent));
  if (insertContent != '') {
    happenTimeFun(insertContent);
    console.log(happenTimeFun(insertContent));
    panel.classList.add('panel1');
    panel.style.visibility = 'visible';

    setTimeout(() => {
      showconvertedTime.innerHTML = happenTimeFun(insertContent);
    }, 200);
  }
  //弹出后获取dom
  panelSpan.addEventListener('click', function () {
    console.log(panelSpan.innerHTML);
    Copy(panelSpan.innerHTML);
  });
});
//3.时间转时间戳部分
//获取datePicker选择日期
function selectTime() {
  selectedTime = datePicker.value;
}
datePicker.addEventListener('change', selectTime);
//时分秒选择器
hms.addEventListener('change', function () {
  selectedhms = hms.value;
});
//添加转换时间选择器
addhms.addEventListener('click', function () {
  hms.style.display = 'block';
  addhms.style.display = 'none';
  timeToUnix.style.display = 'none';
  fulltimeToUnix.style.display = 'block';
});
//时间戳暂停按钮
pausebtn.addEventListener('click', function () {
  taped = !taped;

  //实现按钮切换
  pausebtn.classList.toggle('icon-24gf-play');

  if (taped) {
    clearInterval(timer);
    currentUnix.classList.add('currentUnix');
    currentUnixText.innerHTML = '<strong>当前时间戳(点击复制):</strong>';
  } else {
    getcurrentUnix();
    timer = setInterval(() => {
      getcurrentUnix();
    }, 1000);
    currentUnixText.innerHTML = '<strong>当前时间戳：</strong>';
    currentUnix.classList.remove('currentUnix');
  }
});
//当前时间戳复制到剪贴板
currentUnix.addEventListener('click', function () {
  Copy(currentUnix.innerHTML);
});

//完整时间转时间戳函数
function TimeToUnix() {
  fulltime = selectedTime + '\t' + selectedhms;
  let timeStamp;
  console.log(fulltime);
  if (selectedTime && selectedhms) {
    var date = new Date(fulltime);
    timeStamp = date.getTime();
    result.value = timeStamp;
    resultofTime = timeStamp;
  }
  return timeStamp;
}

//年月日转换按钮
timeToUnix.addEventListener('click', function () {
  if (selectedTime) {
    var date = new Date(selectedTime);
    timeStamp = date.getTime();

    result.value = timeStamp;
    resultofTime = timeStamp;
  }
});
//完整时间转换按钮
fulltimeToUnix.addEventListener('click', TimeToUnix);

copy.addEventListener('click', function () {
  if (result.value) {
    Copy(resultofTime);
  }
});
//4.重置数据部分
resetbtn.addEventListener('click', function () {
  if (insertContent.value) {
    insertContent.value = '';
    panel.style.visibility = 'hidden';
    panel.classList.add('panel2');
  }
  if (hms.style.display == 'block') {
    hms.style.display = 'none';
    addhms.style.display = 'block';
  }
  if (fulltimeToUnix.style.display == 'block') {
    fulltimeToUnix.style.display = 'none';
    timeToUnix.style.display = 'block';
  }
  panelSpan.innerHTML = '';
  result.value = '';
  datePicker.value = '';
  hms.value = '00:00:00';
});
//系统剪贴板
function Copy(resultofTime) {
  // content为要复制的内容
  var input = document.createElement('input');
  document.body.appendChild(input);
  input.setAttribute('value', resultofTime);
  input.select();
  document.execCommand('copy'); // 执行浏览器复制命令
  if (document.execCommand('copy')) {
    document.execCommand('copy');
    console.log('复制成功');
    alert('url已复制好，可贴粘。');
  }
  document.body.removeChild(input);
}
