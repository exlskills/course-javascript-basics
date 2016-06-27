// used to generate random json from http://www.json-generator.com/

[
  '{{repeat(200)}}',
  {
    firstname: '{{firstName()}}',
    lastname: '{{surname()}}',
    age: '{{integer(20, 40)}}',
    username: function () {
      function integer(low, high) {
        return (Math.random() * (high - low) + low) | 0;
      }

      var random = integer(0, 10);

      if (random % 3) {
        return this.firstname.substring(0, integer(3, 10)) + integer(0, 100);
      } else if (random % 3 === 1) {
        return this.lastname.substring(0, integer(3, 10)) + integer(0, 100);
      }

      return this.firstname.substring(0, integer(3, 10)) + '.' + this.lastname.substring(0, integer(3, 10));

    },
    avatar: function () {
      var avatars = [
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcThQw_UaZIN2GvjAGpXAprApCStsjgbznXQM7i28I1dsodVpsLT',
        'https://danielmiessler.com/images/cat-eating-cactus.jpg',
        'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg',
        'http://i.actualno.com/actualno_2013/upload/news/2014/07/03/0326801001404385088_47693_600x458.jpg'
      ];
      function integer(low, high) {
        return (Math.random() * (high - low) + low) | 0;
      }
      return avatars[integer(0, avatars.length)];
    },
    gender: '{{gender()}}',
    email: '{{email()}}',
    phone: '+1 {{phone()}}',
    registered: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    courses: [
      {
        title: 'CSS',
        homeworkAssignments: '{{integer(0, 4)}}',
        attendance: '{{integer(0, 4)}}',
        exam: '{{integer(0, 201)}}'
      },
      {
        title: 'CSharp Advanced',
        homeworkAssignments: '{{integer(0, 10)}}',
        attendance: '{{integer(0, 8)}}',
        exam: '{{integer(0, 500)}}'
      }
    ]
  }
]