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