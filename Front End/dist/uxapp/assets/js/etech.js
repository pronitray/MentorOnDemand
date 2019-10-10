function hideShowTech(divId, divId1, element) {
           if(element.value == 1)
              document.getElementById(divId).style.display = 'block';
           else
              document.getElementById(divId).style.display = 'none';

              if(element.value == 2)
              document.getElementById(divId1).style.display = 'block';
           else
              document.getElementById(divId1).style.display = 'none';
       }