function enumDemo() {
   enum temperature{
      cold,
      hot
   };

   let temp = temperature.cold;

   switch (temp) {
      case temperature.cold:
         console.log("Brrr...");
         break;
      case temperature.hot:
         console.log("yikes!");
         break;
   }
}

enumDemo();