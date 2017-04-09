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
        // console.log(data);
        $('#list-todos').prepend(`
          <div id="${data._id}">
            <div class="list col-md-4">
              <span class="card-title">${data.title}</span>
            </div>
            <div class="status col-md-4">
              <p id="status-${data._id}">${data.status}</p>
            </div>
            <div class="col-md-4">
              <a class="button is-success" onclick="complete('${data._id}')">Complete</a>
              <a id="uncomplete-${data._id}" class="button is-warning" onclick="uncomplete('${data._id}')">Uncomplete</a>
              <a class="button is-danger" onclick="deleteData('${data._id}')">Delete</a>
            </div>
          </div>
        `)
      })
    }
  })
})
// add todo
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

function complete(id) {
  $.ajax({
    url: `http://localhost:3000/api/todo/complete/${id}`,
    type: 'PUT',
    success: function(result) {
      console.log(result.status);
      $(`#status-${id}`).html('true')
    }
  })
}

function uncomplete(id) {
  $.ajax({
    url: `http://localhost:3000/api/todo/uncomplete/${id}`,
    type: 'PUT',
    success:  function(result) {
      $(`#status-${id}`).html('false')
    }
  })
}


// remove todo
function deleteData(id) {
  $.ajax({
    url: `http://localhost:3000/api/todo/${id}`,
    type: 'DELETE',
    success: function(data) {
      $(`#${id}`).remove()
    }
  })
}
