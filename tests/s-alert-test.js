'use strict';
const chai = require('chai');

var sAlertRender = function () {
    var body = document.getElementsByTagName('body')[0];
    return Blaze.render(Template.sAlert, body);
};

var getCSSProperty = function (selector, property) {
    return getComputedStyle(document.querySelector(selector), null).getPropertyValue(property);
};

describe('sAlert warning function', function () {
    var renderedView;
    before(function () {
        sAlert.warning('Test warning message...', {timeout: 'none'});
        renderedView = sAlertRender();
    });
    it('should be s-alert warning document in the sAlert.collection', function () {
        chai.expect(sAlert.collection.findOne().message).to.equal('Test warning message...');
        chai.expect(sAlert.collection.findOne().condition).to.equal('warning');
    });
    it('should be ".s-alert-warning" element in the DOM', function () {
        chai.expect($('.s-alert-box').length).to.not.equal(0);
        chai.expect($('.s-alert-box').hasClass('s-alert-warning')).to.be.true;
    });
    after(function () {
        sAlert.closeAll();
        Blaze.remove(renderedView);
    });
});

describe('sAlert success function', function () {
    var renderedView;
    before(function () {
        sAlert.success('Test success message...', {timeout: 'none'});
        renderedView = sAlertRender();
    });
    it('should be s-alert success document in the sAlert.collection', function () {
        chai.expect(sAlert.collection.findOne().message).to.equal('Test success message...');
        chai.expect(sAlert.collection.findOne().condition).to.equal('success');
    });
    it('should be ".s-alert-success" element in the DOM', function () {
        chai.expect($('.s-alert-box').length).to.not.equal(0);
        chai.expect($('.s-alert-box').hasClass('s-alert-success')).to.be.true;
    });
    after(function () {
        sAlert.closeAll();
        Blaze.remove(renderedView);
    });
});

describe('sAlert info function', function () {
    var renderedView;
    before(function () {
        sAlert.info('Test info message...', {timeout: 'none'});
        renderedView = sAlertRender();
    });
    it('should be s-alert info document in the sAlert.collection', function () {
        chai.expect(sAlert.collection.findOne().message).to.equal('Test info message...');
        chai.expect(sAlert.collection.findOne().condition).to.equal('info');
    });
    it('should be ".s-alert-info" element in the DOM', function () {
        chai.expect($('.s-alert-box').length).to.not.equal(0);
        chai.expect($('.s-alert-box').hasClass('s-alert-info')).to.be.true;
    });
    after(function () {
        sAlert.closeAll();
        Blaze.remove(renderedView);
    });
});

describe('sAlert error function', function () {
    var renderedView;
    before(function () {
        sAlert.error('Test error message...', {timeout: 'none'});
        renderedView = sAlertRender();
    });
    it('should be s-alert error document in the sAlert.collection', function () {
        chai.expect(sAlert.collection.findOne().message).to.equal('Test error message...');
        chai.expect(sAlert.collection.findOne().condition).to.equal('error');
    });
    it('should be ".s-alert-error" element in the DOM', function () {
        chai.expect($('.s-alert-box').length).to.not.equal(0);
        chai.expect($('.s-alert-box').hasClass('s-alert-error')).to.be.true;
    });
    after(function () {
        sAlert.closeAll();
        Blaze.remove(renderedView);
    });
});

describe('sAlert close function by alert id', function () {
    var renderedView;
    var sAlertId;
    before(function () {
        sAlertId = sAlert.success('Test close function...', {timeout: 'none'});
        renderedView = sAlertRender();
    });
    it('should be s-alert document and element in DOM', function () {
        chai.expect(sAlert.collection.findOne(sAlertId).length).to.not.equal(0);
        chai.expect($('.s-alert-box').length).to.not.equal(0);
    });
    it('should be no s-alert document in the collection after sAlert.close function is called', function () {
        sAlert.close(sAlertId);
        chai.expect(sAlert.collection.findOne(sAlertId)).to.be.undefined;
    });
    it('should be no s-alert element in the DOM after sAlert.close function is called', function () {
        Blaze.remove(renderedView);
        chai.expect($('.s-alert-box').length).to.equal(0);
    });
    after(function () {
        sAlert.closeAll();
        Blaze.remove(renderedView);
    });
});

describe('sAlert 1000ms timeout', function () {
    var renderedView;
    var sAlertId;
    before(function (done) {
        sAlertId = sAlert.success('Test timeout param...', {timeout: 1000});
        renderedView = sAlertRender();
        Meteor.setTimeout(function () {
            done();
        }, 1500);
    });
    it('should not be s-alert document in the collection after 1500ms', function (done) {
        chai.expect(sAlert.collection.findOne(sAlertId)).to.be.undefined;
        done();
    });
    after(function () {
        sAlert.closeAll();
        Blaze.remove(renderedView);
    });
});

describe('sAlert 1800ms timeout', function () {
    var renderedView;
    var sAlertId;
    before(function (done) {
        sAlertId = sAlert.success('Test timeout param...', {timeout: 1800});
        renderedView = sAlertRender();
        Meteor.setTimeout(function () {
            done();
        }, 1000);
    });
    it('should be s-alert document in the collection after 1000ms', function (done) {
        chai.expect(sAlert.collection.findOne(sAlertId)).to.not.equal(0);
        done();
    });
    after(function () {
        sAlert.closeAll();
        Blaze.remove(renderedView);
    });
});

describe('sAlert position bottom-left', function () {
    var renderedView;
    var sAlertId;
    before(function () {
        sAlertId = sAlert.success('Test position...', {position: 'bottom-left', timeout: 'none'});
        renderedView = sAlertRender();
    });
    it('should have s-alert-bottom-left class', function () {
        chai.expect($('.s-alert-box').hasClass('s-alert-bottom-left')).to.be.true;
    });
    it('should have document with position bottom-left in the collection', function () {
        chai.expect(sAlert.collection.findOne(sAlertId).position).to.equal('bottom-left');
    });
    after(function () {
        sAlert.closeAll();
        Blaze.remove(renderedView);
    });
});

describe('sAlert position top-left', function () {
    var renderedView;
    var sAlertId;
    before(function () {
        sAlertId = sAlert.success('Test position...', {position: 'top-left', timeout: 'none'});
        renderedView = sAlertRender();
    });
    it('should have s-alert-top-left class', function () {
        chai.expect($('.s-alert-box').hasClass('s-alert-top-left')).to.be.true;
    });
    it('should have document with position top-left in the collection', function () {
        chai.expect(sAlert.collection.findOne(sAlertId).position).to.equal('top-left');
    });
    after(function () {
        sAlert.closeAll();
        Blaze.remove(renderedView);
    });
});

describe('sAlert position top-right', function () {
    var renderedView;
    var sAlertId;
    before(function () {
        sAlertId = sAlert.success('Test position...', {position: 'top-right', timeout: 'none'});
        renderedView = sAlertRender();
    });
    it('should have s-alert-top-right class', function () {
        chai.expect($('.s-alert-box').hasClass('s-alert-top-right')).to.be.true;
    });
    it('should have document with position top-right in the collection', function () {
        chai.expect(sAlert.collection.findOne(sAlertId).position).to.equal('top-right');
    });
    after(function () {
        sAlert.closeAll();
        Blaze.remove(renderedView);
    });
});

describe('sAlert position bottom-right', function () {
    var renderedView;
    var sAlertId;
    before(function () {
        sAlertId = sAlert.success('Test position...', {position: 'bottom-right', timeout: 'none'});
        renderedView = sAlertRender();
    });
    it('should have s-alert-bottom-right class', function () {
        chai.expect($('.s-alert-box').hasClass('s-alert-bottom-right')).to.be.true;
    });
    it('should have document with position bottom-right in the collection', function () {
        chai.expect(sAlert.collection.findOne(sAlertId).position).to.equal('bottom-right');
    });
    after(function () {
        sAlert.closeAll();
        Blaze.remove(renderedView);
    });
});

describe('sAlert position bottom', function () {
    var renderedView;
    var sAlertId;
    before(function () {
        sAlertId = sAlert.success('Test position...', {position: 'bottom', timeout: 'none'});
        renderedView = sAlertRender();
    });
    it('should have s-alert-bottom class', function () {
        chai.expect($('.s-alert-box').hasClass('s-alert-bottom')).to.be.true;
    });
    it('should have document with position bottom in the collection', function () {
        chai.expect(sAlert.collection.findOne(sAlertId).position).to.equal('bottom');
    });
    after(function () {
        sAlert.closeAll();
        Blaze.remove(renderedView);
    });
});

describe('sAlert position top', function () {
    var renderedView;
    var sAlertId;
    before(function () {
        sAlertId = sAlert.success('Test position...', {position: 'top', timeout: 'none'});
        renderedView = sAlertRender();
    });
    it('should have s-alert-top class', function () {
        chai.expect($('.s-alert-box').hasClass('s-alert-top')).to.be.true;
    });
    it('should have document with position top in the collection', function () {
        chai.expect(sAlert.collection.findOne(sAlertId).position).to.equal('top');
    });
    after(function () {
        sAlert.closeAll();
        Blaze.remove(renderedView);
    });
});

describe('sAlert offset', function () {
    var renderedView;
    var sAlertId;
    before(function () {
        sAlertId = sAlert.success('Test position...', {position: 'top-right', timeout: 'none', offset: 100});
        renderedView = sAlertRender();
    });
    // TODO : test needs to be changed
    // it('should have top offset set', function () {
    //     chai.expect(getCSSProperty('.s-alert-box', 'top')).to.equal(100);
    // });
    it('should have document with offset in the collection', function () {
        chai.expect(sAlert.collection.findOne(sAlertId).offset).to.equal(100);
    });
    after(function () {
        sAlert.closeAll();
        Blaze.remove(renderedView);
    });
});

describe('sAlert without stacking', function () {
    var renderedView1;
    var renderedView2;
    var sAlertId1;
    var sAlertId2;
    var sa1;
    var sa2;
    before(function () {
        sAlertId1 = sAlert.success('Test position...', {position: 'top', timeout: 'none', stack: false});
        renderedView1 = sAlertRender();
        sAlertId2 = sAlert.success('Test position...', {position: 'top', timeout: 'none', stack: false});
        renderedView2 = sAlertRender();
        sa1 = $('#' + sAlertId1).css('top');
        sa2 = $('#' + sAlertId2).css('top');
    });
    it('should have equal position as the previous one', function () {
        chai.expect(sa1).to.equal(sa2);
    });
    it('should have document with stack set to false in the collection', function () {
        chai.expect(sAlert.collection.findOne(sAlertId1).stack).to.be.false;
        chai.expect(sAlert.collection.findOne(sAlertId2).stack).to.be.false;
    });
    after(function () {
        sAlert.closeAll();
        Blaze.remove(renderedView1);
        Blaze.remove(renderedView2);
    });
});

describe('sAlert with stacking', function () {
    var renderedView1;
    var renderedView2;
    var sAlertId1;
    var sAlertId2;
    var sa1;
    var sa2;
    before(function () {
        sAlertId1 = sAlert.success('Test position...', {position: 'top', timeout: 'none', stack: true});
        renderedView1 = sAlertRender();
        sAlertId2 = sAlert.success('Test position...', {position: 'top', timeout: 'none', stack: true});
        renderedView2 = sAlertRender();
        sa1 = $('#' + sAlertId1).css('top');
        sa2 = $('#' + sAlertId2).css('top');
    });
    // TODO : test needs to be changed
    // it('should have not equal position as the previous one', function () {
    //     chai.expect(sa1).to.not.equal(sa2);
    // });
    it('should have document with stack set to true in the collection', function () {
        chai.expect(sAlert.collection.findOne(sAlertId1).stack).to.be.true;
        chai.expect(sAlert.collection.findOne(sAlertId2).stack).to.be.true;
    });
    after(function () {
        sAlert.closeAll();
        Blaze.remove(renderedView1);
        Blaze.remove(renderedView2);
    });
});

describe('sAlert callback onClose by close and closeAll functions', function () {
    var renderedView1;
    var renderedView2;
    var renderedView3;
    var sAlertId1;
    var sAlertId2;
    var sAlertId3;
    var isClosed1;
    var isClosed2;
    var isClosed3;
    before(function () {
        sAlertId1 = sAlert.success('Test onClose callback...', {timeout: 'none', onClose: function() {isClosed1 = true;}});
        renderedView1 = sAlertRender();
        sAlertId2 = sAlert.success('Test onClose callback...', {timeout: 'none', onClose: function() {isClosed2 = true;}});
        renderedView2 = sAlertRender();
        sAlertId3 = sAlert.success('Test onClose callback...', {timeout: 'none', onClose: function() {isClosed3 = true;}});
        renderedView3 = sAlertRender();
    });
    it('should get called when specifically closing the alert.', function () {
        sAlert.close(sAlertId1);
        chai.expect(isClosed1).to.be.true;
        chai.expect(isClosed2).to.be.undefined;
        chai.expect(isClosed3).to.be.undefined;
    });
    it('should get called when specifically closing all alerts..', function () {
        sAlert.closeAll();
        chai.expect(isClosed1).to.be.true;
        chai.expect(isClosed2).to.be.true;
        chai.expect(isClosed3).to.be.true;
    });
    after(function () {
        sAlert.closeAll();
        Blaze.remove(renderedView1);
        Blaze.remove(renderedView2);
        Blaze.remove(renderedView3);
    });
});

describe('sAlert callback onClose without timeout param', function () {
    var renderedView;
    var sAlertId;
    var isClosed;
    before(function (done) {
        this.timeout(sAlert.settings.timeout + 1000 );
        sAlertId = sAlert.success('Test onClose callback...', {onClose: function() {isClosed = true; done();}});
        renderedView = sAlertRender();
    });
    it('should get called when the default timeout closes the alert.', function (done) {
        chai.expect(isClosed).to.be.true;
        done();
    });
    after(function () {
        sAlert.closeAll();
        Blaze.remove(renderedView);
    });
});

describe('sAlert onClose callback with timeout param', function () {
    var renderedView;
    var sAlertId;
    var isClosed;
    before(function () {
        sAlertId = sAlert.success('Test onClose callback...', {timeout: 'none', onClose: function() {isClosed = true;}});
        renderedView = sAlertRender();
    });
    it('should not get called with infinite timeout', function () {
        chai.expect(isClosed).to.be.undefined;
    });
    after(function () {
        sAlert.closeAll();
        Blaze.remove(renderedView);
    });
});

describe('sAlert onClose callback with 1000ms timeout param', function () {
    var renderedView;
    var sAlertId;
    var isClosed;
    before(function (done) {
        sAlertId = sAlert.success('Test onClose callback...', {timeout: 1000, onClose: function() {isClosed = true;}});
        renderedView = sAlertRender();
        Meteor.setTimeout(function () {
            done();
        }, 1500);
    });
    it('should get called after 1000ms timeout', function (done) {
        chai.expect(isClosed).to.be.true;
        done();
    });
    after(function () {
        sAlert.closeAll();
        Blaze.remove(renderedView);
    });
});

describe('sAlert onClose callback with 1800ms timeout param', function () {
    var renderedView;
    var sAlertId;
    var isClosed;
    before(function (done) {
        sAlertId = sAlert.success('Test onClose callback...', {timeout: 1800, onClose: function() {isClosed = true;}});
        renderedView = sAlertRender();
        Meteor.setTimeout(function () {
            done();
        }, 1000);
    });
    it('should not get called before 1800ms timeout', function (done) {
        chai.expect(isClosed).to.be.undefined;
        done();
    });
    after(function () {
        sAlert.closeAll();
        Blaze.remove(renderedView);
    });
});
