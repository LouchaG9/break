class Utils {
    colorPickerBG(){
      const colors = ['#3e6990','#adbc91','#eedeab','#dabfcd','#f1c7af','#bacade']
      const colorTargets = document.querySelectorAll('.random-bg-color')
  
      colorTargets.forEach((target) => {
       const randomColor = colors[Math.floor(Math.random() * colors.length)];
       target.style.backgroundColor = randomColor
      }); 
   }
   
}
  
export default new Utils()