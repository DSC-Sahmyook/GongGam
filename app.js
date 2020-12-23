const BGCOLORS = [
	{r: 0, g: 0, b: 0},
	{r: 17, g: 23, b: 47},
	{r: 248, g: 246, b: 242},
    {r: 255, g: 255, b: 255},
    {r: 242, g: 226, b: 5},
    {r: 114, g: 206, b:242}
];

const TXCOLORS = [
    {r: 255, g: 255, b: 255},
    {r: 255, g: 255, b: 255},   
    {r: 255, g: 165, b:0},
    {r: 249, g: 239, b:4},
    {r: 92, g:215, b:242},
    {r: 191, g:115, b:48}
];

function load ()
{
    num = Math.floor(Math.random() * 6);
    bgrgb = BGCOLORS[num];
    txrgb = TXCOLORS[num];
    document.body.style.background = "rgba("+bgrgb.r+", "+bgrgb.g+","+bgrgb.b+", 1)";
    document.body.style.color = "rgba("+txrgb.r+"," +txrgb.g+"," +txrgb.b+", 1)";
    var arr_button = document.getElementsByTagName("button");
    for (var i =0; i<arr_button.length; i++)
    {
        arr_button[i].style.color = "rgba("+txrgb.r+"," +txrgb.g+"," +txrgb.b+", 1)";
        arr_button[i].style.border = "1px solid rgba("+txrgb.r+"," +txrgb.g+"," +txrgb.b+", 1)";
    }
}

function Alchemist()
{
    bgrgb = BGCOLORS[1];
    txrgb = TXCOLORS[1];
    document.body.style.background = "rgba("+bgrgb.r+", "+bgrgb.g+","+bgrgb.b+", 1)";
    document.body.style.color = "rgba("+txrgb.r+"," +txrgb.g+"," +txrgb.b+", 1)";
    var arr_button = document.getElementsByTagName("button");
    for (var i =0; i<arr_button.length; i++)
    {
        arr_button[i].style.color = "rgba("+txrgb.r+"," +txrgb.g+"," +txrgb.b+", 1)";
        arr_button[i].style.border = "1px solid rgba("+txrgb.r+"," +txrgb.g+"," +txrgb.b+", 1)";
    }
}

function OrangeTree()
{
    bgrgb = BGCOLORS[2];
    txrgb = TXCOLORS[2];
    document.body.style.background = "rgba("+bgrgb.r+", "+bgrgb.g+","+bgrgb.b+", 1)";
    document.body.style.color = "rgba("+txrgb.r+"," +txrgb.g+"," +txrgb.b+", 1)";
    var arr_button = document.getElementsByTagName("button");
    for (var i =0; i<arr_button.length; i++)
    {
        arr_button[i].style.color = "rgba("+txrgb.r+"," +txrgb.g+"," +txrgb.b+", 1)";
        arr_button[i].style.border = "1px solid rgba("+txrgb.r+"," +txrgb.g+"," +txrgb.b+", 1)";
    }
}

function Diving()
{
    bgrgb = BGCOLORS[3];
    txrgb = TXCOLORS[3];
    document.body.style.background = "rgba("+bgrgb.r+", "+bgrgb.g+","+bgrgb.b+", 1)";
    document.body.style.color = "rgba("+txrgb.r+"," +txrgb.g+"," +txrgb.b+", 1)";
    var arr_button = document.getElementsByTagName("button");
    for (var i =0; i<arr_button.length; i++)
    {
        arr_button[i].style.color = "rgba("+txrgb.r+"," +txrgb.g+"," +txrgb.b+", 1)";
        arr_button[i].style.border = "1px solid rgba("+txrgb.r+"," +txrgb.g+"," +txrgb.b+", 1)";
    }
}

function psychology()
{
    bgrgb = BGCOLORS[4];
    txrgb = TXCOLORS[4];
    document.body.style.background = "rgba("+bgrgb.r+", "+bgrgb.g+","+bgrgb.b+", 1)";
    document.body.style.color = "rgba("+txrgb.r+"," +txrgb.g+"," +txrgb.b+", 1)";
    var arr_button = document.getElementsByTagName("button");
    for (var i =0; i<arr_button.length; i++)
    {
        arr_button[i].style.color = "rgba("+txrgb.r+"," +txrgb.g+"," +txrgb.b+", 1)";
        arr_button[i].style.border = "1px solid rgba("+txrgb.r+"," +txrgb.g+"," +txrgb.b+", 1)";
    }
}

function bonobono()
{
    bgrgb = BGCOLORS[5];
    txrgb = TXCOLORS[5];
    document.body.style.background = "rgba("+bgrgb.r+", "+bgrgb.g+","+bgrgb.b+", 1)";
    document.body.style.color = "rgba("+txrgb.r+"," +txrgb.g+"," +txrgb.b+", 1)";
    var arr_button = document.getElementsByTagName("button");
    for (var i =0; i<arr_button.length; i++)
    {
        arr_button[i].style.color = "rgba("+txrgb.r+"," +txrgb.g+"," +txrgb.b+", 1)";
        arr_button[i].style.border = "1px solid rgba("+txrgb.r+"," +txrgb.g+"," +txrgb.b+", 1)";
    }
}

function prince()
{
    bgrgb = BGCOLORS[0];
    txrgb = TXCOLORS[0];
    document.body.style.background = "rgba("+bgrgb.r+", "+bgrgb.g+","+bgrgb.b+", 1)";
    document.body.style.color = "rgba("+txrgb.r+"," +txrgb.g+"," +txrgb.b+", 1)";
    var arr_button = document.getElementsByTagName("button");
    for (var i =0; i<arr_button.length; i++)
    {
        arr_button[i].style.color = "rgba("+txrgb.r+"," +txrgb.g+"," +txrgb.b+", 1)";
        arr_button[i].style.border = "1px solid rgba("+txrgb.r+"," +txrgb.g+"," +txrgb.b+", 1)";
    }
}

window.addEventListener('load', function(){
    load();
});


