// $(document).ready(function() {
//   // add todo list
//   (function() {
//     let close = $('<span class="close"></span>').text('\u00D7')
//     $('#parent-list').children().append(close)
//   }())
//
//   $('#button').on('click', function() {
//     var todo = $('#todo-input').val()
//
//     if (!todo) {
//       alert('Please input something !')
//     } else {
//       $('#parent-list').append(`<li>${todo}<span class="close">\u00D7</span></li>`)
//     }
//   })
//
//   $('#parent-list').on('click', '.close', function(e) {
//     $(e.target).parent().remove()
//   })
//
//   $('#parent-list').on('click', 'li', function(e) {
//     $(e.target).toggleClass('checked')
//   })
// })

$(document).ready(function() {
  // get data
  $.ajax({
    url: 'http://localhost:3000/api/todo',
    type: 'GET',
    success: function (data) {
      data.forEach(function (data) {
        $('#list-todos').prepend(`
          <div class="list col-md-6">
            <span class="card-title">${data.title}</span>
          </div>
          <div class="status col-md-6">
            <p>${data.status}</p>
          </div>
        `)
      })
    }
  })
})

function addData() {
  $.ajax({
    url: 'http://localhost:3000/api/todo',
    type: 'POST',
    data: {
      title: $('#title').val()
    },
    success: function(data) {
      $('#title').val()
      $('#list-todos').prepend(`
        <div class="list col-md-6">
          <span class="card-title">${data.title}</span>
        </div>
        <div class="status col-md-6">
          <p>${data.status}</p>
        </div>
      `)
    }
  })
}
