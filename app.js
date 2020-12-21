const BGCOLORS = [
	{r: 0, g: 0, b: 0},
	{r: 17, g: 23, b: 47},
	{r: 248, g: 246, b: 242},
    {r: 255, g: 255, b: 255},
    {r: 242, g: 226, b: 5},
    {r: 52, g: 61, b:89}
];

const TXCOLORS = [
    {r: 255, g: 255, b: 255},
    {r: 255, g: 255, b: 255},   
    {r: 255, g: 165, b:0},
    {r: 249, g: 239, b:4},
    {r: 92, g:215, b:242},
    {r: 242, g:188, b:27}
];

function resize ()
{
    num = Math.floor(Math.random() * 6);
    bgrgb = BGCOLORS[num];
    txrgb = TXCOLORS[num];
    document.body.style.background = "rgba("+bgrgb.r+", "+bgrgb.g+","+bgrgb.b+", 1)";
    document.body.style.color = "rgba("+txrgb.r+"," +txrgb.g+"," +txrgb.b+", 1)";
}

window.addEventListener('resize', function(){
    resize();
});


