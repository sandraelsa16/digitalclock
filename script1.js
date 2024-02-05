const date= document.querySelector('.date');
const tick1 = () =>{
    const monthNames = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
      ];
    const now = new Date();
    const d = now.getDate();
const monthIndex = now.getMonth();
    
    
      const monthname = monthNames[monthIndex];
      const year = now.getFullYear();

    const html1=`
    <time>${d}th ${monthname}, ${year}</time>
    `;
    date.innerHTML=html1
  
};
tick1();
