function fun1()
{
    var str1 = document.getElementById("array1").value;
    var str2 = document.getElementById("array2").value;


      var string1 = [];                                                                //array 1 
      var string2 = [];                                                                //array 2

      for(i=0;i<str1.length;i++)                                                       //pushing string 1 values into array.
      {
            if(str1[i] >= "0" && str1[i] <= "9")
               string1.push(str1[i]);
      }
      string1.sort();


      for(i=0;i<str2.length;i++)                                                       //pushing string 2 values into array.
      {
            if(str2[i] >= "0" && str2[i] <= "9")
               string2.push(str2[i]);
      }
      string2.sort();



      if(string1.length == 0 ||  string2.length == 0)                                     //checking if user has input value or not.
      document.getElementById("out").innerHTML = "Enter values in both fields";

      else{

      var flag=1;                                                                      //If length not same then not same
      if(string1.length != string2.length)
               flag=0;

      else
      {
         for(i=0;i<string1.length;i++)                                                 //checking the both array values one by one
         {
               if(string1[i] != string2[i]){
                     flag=0;
                     break;
                  }
         }

      }
         if(flag==1)
            // alert("same value");
            document.getElementById("out").innerHTML = "Same array";

         else
            // alert("different value");
            document.getElementById("out").innerHTML = "Different array";

   }


}




                                                                                          // dark mode java script
function myFunction() {                                                    
   var element = document.body;
   element.classList.toggle("dark-mode");
}


                                                                                          // drop down javascript start

function openNav() {
   document.getElementById("mySidepanel").style.width = "250px";
 }
 
 function closeNav() {
   document.getElementById("mySidepanel").style.width = "0";
 }

                                                                                          // drop down javascript end







                                                                                          //javascript for hiding and reapppearing loading                                                                                 

function visibleback(){
   document.getElementById("loader").style.visibility = "visible";

   const myTimeout = setTimeout(hiddenagain, 3800);

   function hiddenagain() {
      document.getElementById("loader").style.visibility = "hidden";
    }


}