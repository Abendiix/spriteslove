/*
MIT License

Copyright (c) 2024 Abendiix

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

var canvas = document.getElementById('imageCanvas');
var ctx = canvas.getContext('2d');

function showOrHideElements(preOrPost, visibility)
    {
        for(let i = 0; i < preOrPost.length; i++)
            {
                preOrPost[i].style.display = visibility;
            }
    }

function changeVisibility(typeOfChange)
{
    var preImage = document.getElementsByClassName('pre-image');
    var postImage = document.getElementsByClassName('post-image');
    
    switch(typeOfChange)
    {
      case "beforeSpriteIsLoaded":
            showOrHideElements(preImage, 'inline');
            showOrHideElements(postImage, 'none');
            canvas.width = window.screen.width/2.5;
            canvas.height = window.screen.height/2.5;
            canvas.style.background = "white";
        break;
      case "afterSpriteIsLoaded":
            showOrHideElements(preImage, 'none');
            showOrHideElements(postImage, 'block');
            document.getElementById("background").scrollIntoView();
        break;
    }
}