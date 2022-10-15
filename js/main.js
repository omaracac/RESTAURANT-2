







   // عمل وظيفة مهمتها إضافة عدد معين على ععد الإجمالي 
   function add( id , number_new ) { 
    // id = > معبر عن معرف زر الذي يعرض النتيجة 
    // number_new = > معبر عن سعر السلعة الذي سيتم إضافته للمجموع الكلي 
   document.getElementById(id).innerHTML = parseInt(document.getElementById(id).innerHTML ) + number_new ; 
   // parseInt => إستعمل الدالة لتحويل النص لرقم 
} 