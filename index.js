const URL = 'http://localhost:3000/BabyShower'

$.get(URL).then((data) => babyshower(data))


function babyshower(data) {
   for(let datas of data) {
      $('#tet').append(`
      <div class="tt">
      <div id='tett'>
      <textarea>${datas.theme}</textarea>
      </div>
      </div>`
      );
   }
}