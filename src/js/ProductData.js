module.exports = {
  // Load Mock Product Data Into localStorage
  init: function() {
    localStorage.clear();
    localStorage.setItem('notifications', JSON.stringify([
      {
        id: '1',
        name: 'Notification 1',
        destination: 'Toronto, ON',
        origin: 'Oakville, ON',
        arriveBy: '3:35',
        leaveBy: '2:30'
      },
      {
        id: '2',
        name: 'Notification 2',
        destination: 'Manitoba, ON',
        origin: 'Vancouver, ON',
        arriveBy: '4:45',
        leaveBy: '2:01'
      }
    ]));
  }
};
