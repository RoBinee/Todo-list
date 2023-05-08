// const data = [
//   {
//     title: 'One project',
//     todos: [
//       {
//         title: 'One project todo',
//         dueDate: '2027-12-02',
//       },
//       {
//         title: 'One project todo2',
//         dueDate: '2023-06-03',
//       },
//     ],
//   },
//   {
//     title: 'Two project',
//     todos: [
//       {
//         title: 'Two project todo',
//         dueDate: '2027-12-02',
//       },
//       {
//         title: 'Two project todo2',
//         dueDate: '2023-06-03',
//       },
//     ],
//   },
// ];

let obj = {
  data: [
    {
      title: 'One project',
      todos: [
        {
          title: 'One project todo',
          dueDate: '2027-12-02',
        },
        {
          title: 'One project todo2',
          dueDate: '2023-06-03',
        },
      ],
    },
    {
      title: 'Two project',
      todos: [
        {
          title: 'Two project todo',
          dueDate: '2027-12-02',
        },
        {
          title: 'Two project todo2',
          dueDate: '2023-06-03',
        },
      ],
    },
  ],
  get projects() {
    return this.data;
  },
  set projects(array) {
    this.data = array;
  },
};

export { obj };
