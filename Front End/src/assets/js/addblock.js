function hideShowAB(divId, divId1, element) {
           if(element.value == 1)
              document.getElementById('addum').style.display = 'block';
           else
              document.getElementById('addum').style.display = 'none';

              if(element.value == 2)
              document.getElementById('rum').style.display = 'block';
           else
              document.getElementById('rum').style.display = 'none';
       }


       function usermentor(divID, divID1, element) {
            if(element.value == "yes")
                document.getElementById('mentorlist').style.display = 'block';
            else
                document.getElementById('mentorlist').style.display = 'none';

                if(element.value == "no")
                document.getElementById('userlist').style.display = 'block';
            else
                document.getElementById('userlist').style.display = 'none';
       }