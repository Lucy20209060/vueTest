<template>
    <div class="svg-wrap">

        <div class="svg-demo">
            <!-- 
                rect 创建矩形 以及矩形的变种 
                fill 填充颜色
                stroke 定义一条线，文本或元素轮廓颜色
                stroke-width 定义了一条线，文本或元素轮廓厚度
                stroke-linecap 定义不同类型的开放路径的终结(形状)
                fill-opacity 填充色的透明度
                stroke-opacity 边框的透明度
            -->
            <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <rect 
                    width="50%" 
                    height="50%" 
                    fill='red'
                    stroke-width='10'
                    fill-opacity='0.6'
                    stroke-opacity='0.3'
                    stroke='rgb(0,0,0)'
                />
            </svg>
        </div>

        <div class="svg-demo">
            <!-- 
                stroke-dasharray 创建虚线
                x1,x2 实线长度和虚线长度
             -->
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <g fill="none" stroke="black" stroke-width="6">
                    <path stroke-linecap="butt" stroke-dasharray="5,5" d="M5 20 l215 0" />
                    <path stroke-linecap="round" d="M5 40 l215 0" />
                    <path stroke-linecap="square" d="M5 60 l215 0" />
                </g>
            </svg>
        </div>

        <div class="svg-demo">
            <!-- 
                circle 创建圆 
                cx cy 定义圆的中心坐标
                r 定义圆的半径
            -->
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <circle 
                    cx="100" 
                    cy="100" 
                    r="60" 
                    stroke="black"
                    stroke-width="2" 
                    fill="red"
                />
            </svg>
        </div>

        <div class="svg-demo">
            <!-- 
                ellipse 创建椭圆
                cx cy 定义椭圆的中心坐标
                rx ry 定义椭圆x y轴的半径
            -->
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <ellipse 
                    cx="100" 
                    cy="100" 
                    rx="80" 
                    ry="50"
                    style="fill:yellow;stroke:purple;stroke-width:2"
                />
            </svg>
        </div>

        <div class="svg-demo">
            <!-- 
                line 创建直线
                x1 y1 起点坐标
                x2 y2 终点坐标
            -->
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <line 
                    x1="10" 
                    y1="10" 
                    x2="180" 
                    y2="180"
                    stroke-linecap="round"
                    style="stroke:rgb(255,0,0);stroke-width:10"
                />
            </svg>
        </div>

        <div class="svg-demo">
            <!-- 
                polygon 创建不少于三边的多边形
                points 每个点的坐标
            -->
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polygon 
                    points="10,10 190,40 160,190"
                    style="fill:lime;stroke:purple;stroke-width:1"
                />
            </svg>
        </div>

        <div class="svg-demo">
            <!-- 
                polyline 创建曲线
                points 每个拐点的坐标
            -->
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <polyline 
                points="20,20 40,25 60,40 80,120 120,140 200,180"
                style="fill:none;stroke:black;stroke-width:3" 
            />
            </svg>
        </div>

        <div class="svg-demo">
            <!-- 
                path 定义一个路径
                M = moveto 移动到x,y坐标
                L = lineto 上一个坐标到这个坐标用直线连接
                H = horizontal lineto 绘制水平线
                V = vertical lineto 绘制垂直线
                C = curveto 三次贝赛曲线
                S = smooth curveto
                Q = quadratic Bézier curve 二次贝赛曲线
                T = smooth quadratic Bézier curveto 映射
                A = elliptical Arc 弧线
                Z = closepath 关闭路径 从当前点画一条直线到路径的起点
            -->
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <path d="M150 0 L75 195 L195 195 Z" />
                <path d="M10 10 H 90 V 90 H 10 Z" fill="transparent" stroke="black"/>
            </svg>
        </div>
        <div class="svg-demo">
            <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 80 Q 52.5 10, 95 80 T  180 80" stroke="black" fill="transparent"/>
            </svg>
        </div>
        <div class="svg-demo">
            <!-- 
                text 文本
             -->
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <text 
                    x="100" 
                    y="100" 
                    fill="red"
                    transform="rotate(90, 100,100)"
                >I love SVG</text>
            </svg>
        </div>
        <div class="svg-demo">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                    <path id="path1" d="M25,90 a1,1 0 0,0 100,0" />
                </defs>
                <text x="25" y="90" style="fill:red;">
                    <textPath xlink:href="#path1">I love SVG I love SVG</textPath>
                </text>
            </svg>
        </div>
        <div class="svg-demo">
            <!-- 
                所有svg滤镜定义在<defs>元素中 定义短并且含有特殊元素（滤镜）定义
                linearGradient 定义线性渐变（水平，垂直，或者角渐变） 该标签必须嵌套在defs中
                x1,y1 x2,y2 渐变的开始和结束位置
                渐变的颜色范围可由两种或多种颜色组成。每种颜色通过一个<stop>标签来规定。offset属性用来定义渐变的开始和结束位置
             -->
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:0.2" />
                    <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
                    </linearGradient>
                </defs>
                <ellipse cx="100" cy="70" rx="85" ry="55" fill="url(#grad1)" />
            </svg>
        </div>

        <div class="svg-demo">
            <!-- 
                a 50,50   0   1     1      0,100
                 两个半径     0小弧  0逆时针  目的地坐标
                             1大弧  1顺时针
             -->
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">

            <path d="M 100,50
            a 50,50 0 1 1 0,100
            a 50,50 0 1 1 0,-100" stroke="#eeeff3" stroke-width="5" fill="none" />

            <path 
                d="M 100,50
                a 50,50 0 1 1 0,100
                a 50,50 0 1 1 0,-100" 
                stroke="#5485f7" 
                stroke-width="5" 
                fill="none" 
                :stroke-dasharray="presize"
                stroke-dashoffset='0' 
                transition='all 1s cubic-bezier(.65,.2,.35,1)'
                :stroke-linecap="`${data === 0 ? null : 'round' }`"
                style="transition: all 1s cubic-bezier(.65,.2,.35,1)"
            />
            </svg>
        </div>
        <div class="svg-demo"></div>
        <div class="svg-demo"></div>
        <div class="svg-demo"></div>
        <div class="svg-demo"></div>


        <button @click="click">点击{{data}}</button>



    </div>
</template>

<script>

export default {
    name: 'svg',
    data () {
        return {
            data: 100
        }
    },
    mounted(){
    },
    methods:{
        click(){
            this.data = this.data >= 100 ? 0 : this.data + 10
        }
    },
    computed: {
        presize() {
            // 3.12 约等于 Math.PI
            return `${2 * 50 * 3.12 * this.data/100}px,100000px`;
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.svg-demo{
        display: inline-block;
        width: 200px;
        height: 200px;
    }
</style>