describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('shouldn\'t add a new server when submitServerInfo() called with empty input', function(){
    serverNameInput.value = '';

    expect(Object.keys(allServers).length).toEqual(0);
  })

  it('should add a row to the server table on updateServerTable()', function(){
    submitServerInfo();
    updateServerTable();

    const currentTdsList = document.querySelectorAll('#serverTable tbody tr td');
    expect(currentTdsList.length).toEqual(3);
    expect(currentTdsList[0].innerText).toEqual('Alice');
    expect(currentTdsList[1].innerText).toEqual('$0.00');
    expect(currentTdsList[2].innerText).toEqual('X');
  })

  afterEach(function() {
    // teardown logic
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = '';
  });
});
