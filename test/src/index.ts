/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
'use strict';

import expect = require('expect.js');

import {
  SectionList
} from '../../lib/index';


describe('phosphor-sectionlist', () => {

  describe('SectionList', () => {

    describe('#count', () => {

      it('should get the total number of sections in the list', () => {
        var obj = new SectionList();
        expect(obj.count).to.be(0);
        obj.insert(0, 100, 10);
        expect(obj.count).to.be(100);
        obj.remove(10, 10);
        expect(obj.count).to.be(90);
        obj.insert(100, 100, 20);
        expect(obj.count).to.be(190);
        obj.remove(0, 1000);
        expect(obj.count).to.be(0);
      });

    });

    describe('#size', () => {

      it('should get the total size of all sections in the list.', () => {
        var obj = new SectionList();
        expect(obj.size).to.be(0);
        obj.insert(0, 100, 10);
        expect(obj.size).to.be(1000);
        obj.remove(10, 10);
        expect(obj.size).to.be(900);
        obj.insert(100, 100, 20);
        expect(obj.size).to.be(2900);
        obj.remove(0, 1000);
        expect(obj.size).to.be(0);
      });

    });

    describe('#indexOf()', () => {

      it('should find the index of section which covers a given offset', () => {
        var obj = new SectionList();
        obj.insert(0, 100, 10);
        expect(obj.indexOf(999)).to.be(99);
        obj.remove(10, 10);
        expect(obj.indexOf(11)).to.be(1);
        obj.insert(100, 100, 20);
        expect(obj.indexOf(189)).to.be(18);
        expect(obj.indexOf(500)).to.be(50);
        var obj = new SectionList();
        obj.insert(0, 50, 10);
        obj.insert(50, 50, 20);
        expect(obj.indexOf(15)).to.be(1);
        expect(obj.indexOf(545)).to.be(52);
      });

      it('should should return `-1` if offset is out of range', () => {
        var obj = new SectionList();
        expect(obj.indexOf(0)).to.be(-1);
        obj.insert(0, 100, 10);
        expect(obj.indexOf(1000)).to.be(-1);
        obj.remove(10, 10);
        obj.insert(100, 100, 20);
        expect(obj.indexOf(-10)).to.be(-1);
        obj.remove(0, 1000);
        expect(obj.indexOf(0)).to.be(-1);
      });

    });

    describe('#offsetOf()', () => {

      it('should find the offset position of the section at the given index', () => {
        var obj = new SectionList();
        obj.insert(0, 100, 10);
        expect(obj.offsetOf(11)).to.be(110);
        obj.remove(10, 10);
        expect(obj.offsetOf(11)).to.be(110);
        obj.insert(100, 100, 20);
        expect(obj.offsetOf(189)).to.be(2880);
        var obj = new SectionList();
        obj.insert(0, 50, 10);
        obj.insert(50, 50, 20);
        expect(obj.offsetOf(25)).to.be(250);
        expect(obj.offsetOf(75)).to.be(1000);
      });

      it('should return `-1` if the index is out of range', () => {
        var obj = new SectionList();
        expect(obj.offsetOf(0)).to.be(-1);
        obj.insert(0, 100, 10);
        expect(obj.offsetOf(100)).to.be(-1);
        expect(obj.offsetOf(-100)).to.be(-1);
        obj.remove(0, 1000);
        expect(obj.offsetOf(0)).to.be(-1);
        expect(obj.offsetOf(100)).to.be(-1);
        expect(obj.offsetOf(-100)).to.be(-1);
      });

    });

    describe('#sizeOf()', () => {

      it('should find the size of the section at the given index', () => {
        var obj = new SectionList();
        obj.insert(0, 100, 10);
        expect(obj.sizeOf(11)).to.be(10);
        obj.remove(10, 10);
        expect(obj.sizeOf(89)).to.be(10);
        obj.insert(100, 100, 20);
        expect(obj.sizeOf(189)).to.be(20);
      });

      it('should return -1 if the index is out of range', () => {
        var obj = new SectionList();
        expect(obj.sizeOf(0)).to.be(-1);
        obj.insert(0, 100, 10);
        expect(obj.sizeOf(100)).to.be(-1);
        expect(obj.offsetOf(-100)).to.be(-1);
        obj.remove(0, 1000);
        expect(obj.sizeOf(0)).to.be(-1);
        expect(obj.offsetOf(100)).to.be(-1);
        expect(obj.offsetOf(-100)).to.be(-1);
      });

    });

    describe('#insert()', () => {

      it('should insert new sections into the list', () => {
        var obj = new SectionList();
        expect(obj.size).to.be(0);
        expect(obj.count).to.be(0);
        obj.insert(0, 100, 10);
        expect(obj.size).to.be(1000);
        expect(obj.count).to.be(100);
        expect(obj.sizeOf(50)).to.be(10);
        expect(obj.offsetOf(50)).to.be(500);
        expect(obj.indexOf(50)).to.be(5);
        obj.insert(10, 10, 10);
        expect(obj.size).to.be(1100);
        expect(obj.count).to.be(110);
        obj.insert(0, 100, 0);
        expect(obj.size).to.be(1100);
        expect(obj.count).to.be(210);
        var obj = new SectionList();
        obj.insert(0, 10, 5);
        obj.insert(0, 10, 15);
        obj.insert(0, 10, 25);
        obj.insert(0, 10, 35);
        expect(obj.size).to.be(800);
        expect(obj.count).to.be(40);
        expect(obj.sizeOf(0)).to.be(35);
        expect(obj.sizeOf(10)).to.be(25);
        expect(obj.sizeOf(20)).to.be(15);
        expect(obj.sizeOf(30)).to.be(5);
        var obj = new SectionList();
        obj.insert(0, 10, 5);
        obj.insert(10, 10, 15);
        obj.insert(20, 10, 25);
        obj.insert(30, 10, 35);
        expect(obj.size).to.be(800);
        expect(obj.count).to.be(40);
        expect(obj.sizeOf(0)).to.be(5);
        expect(obj.sizeOf(10)).to.be(15);
        expect(obj.sizeOf(20)).to.be(25);
        expect(obj.sizeOf(30)).to.be(35);
      });

      it('should clamp the index to the range `[0, list.count]`', () => {
        var obj = new SectionList();
        obj.insert(-20, 50, 20);
        obj.insert(100, 75, 10);
        expect(obj.size).to.be(1750);
        expect(obj.count).to.be(125);
        expect(obj.sizeOf(0)).to.be(20);
        expect(obj.sizeOf(49)).to.be(20);
        expect(obj.sizeOf(100)).to.be(10);
        expect(obj.sizeOf(150)).to.be(-1);
        expect(obj.offsetOf(150)).to.be(-1);
      });

      it('should be a no-nop for count `<= 0`', () => {
        var obj = new SectionList();
        obj.insert(0, -10, 1000);
        expect(obj.size).to.be(0);
        expect(obj.count).to.be(0);
        obj.insert(0, 0, 1000);
        expect(obj.size).to.be(0);
        expect(obj.count).to.be(0);
      });

      it('should clamp the size to the range `[0, Infinity]`', () => {
        var obj = new SectionList();
        obj.insert(0, 10, -10);
        expect(obj.size).to.be(0);
        expect(obj.count).to.be(10);
        obj.insert(0, 10, Infinity);
        expect(obj.count).to.be(20);
        expect(obj.size).to.be(Infinity);
      });

      it('should return the index of the first inserted section', () => {
        var obj = new SectionList();
        expect(obj.insert(-20, 50, 20)).to.be(0);
        expect(obj.insert(100, 75, 10)).to.be(50);
        expect(obj.insert(25, 50, 10)).to.be(25);
      });

      it('should return `-1` if the count is `<= 0`', () => {
        var obj = new SectionList();
        expect(obj.insert(0, -10, 20)).to.be(-1);
      });

    });

    describe('#remove()', () => {

      it('should remove existing sections from the list', () => {
        var obj = new SectionList();
        expect(obj.size).to.be(0);
        expect(obj.count).to.be(0);
        obj.remove(10, 10);
        expect(obj.size).to.be(0);
        expect(obj.count).to.be(0);
        obj.insert(0, 100, 10);
        obj.remove(10, 10);
        expect(obj.size).to.be(900);
        expect(obj.count).to.be(90);
        expect(obj.sizeOf(0)).to.be(10);
        expect(obj.offsetOf(5)).to.be(50);
        expect(obj.indexOf(15)).to.be(1);
        obj.remove(0, 90);
        expect(obj.size).to.be(0);
        expect(obj.count).to.be(0);
        expect(obj.sizeOf(0)).to.be(-1);
        expect(obj.offsetOf(0)).to.be(-1);
        expect(obj.indexOf(0)).to.be(-1);
        obj.insert(0, 50, 10);
        obj.insert(50, 50, 20);
        obj.remove(45, 10);
        expect(obj.count).to.be(90);
        expect(obj.size).to.be(1350);
        expect(obj.sizeOf(44)).to.be(10);
        expect(obj.sizeOf(45)).to.be(20);
        obj.remove(40, 50);
        expect(obj.count).to.be(40);
        expect(obj.size).to.be(400);
        expect(obj.sizeOf(0)).to.be(10);
        expect(obj.sizeOf(39)).to.be(10);
      });

      it('should only remove valid sections', () => {
        var obj = new SectionList();
        obj.insert(0, 100, 10);
        obj.resize(-120, 10, 1);
        expect(obj.count).to.be(100);
        obj.remove(-120, 130);
        expect(obj.count).to.be(90);
        obj.remove(80, 100);
        expect(obj.count).to.be(80);
        obj.remove(80, 100);
        expect(obj.count).to.be(80);
      });

      it('should be a no-op if count `<= 0`', () => {
        var obj = new SectionList();
        obj.insert(0, 100, 10);
        obj.remove(0, 0);
        expect(obj.size).to.be(1000);
        expect(obj.count).to.be(100);
        obj.remove(0, -100);
        expect(obj.size).to.be(1000);
        expect(obj.count).to.be(100);
      });

      it('should return the actual number of sections removed', () => {
        var obj = new SectionList();
        expect(obj.remove(0, 10)).to.be(0);
        obj.insert(0, 100, 10);
        expect(obj.remove(-120, 130)).to.be(10);
        expect(obj.remove(80, 100)).to.be(10);
        expect(obj.remove(80, 100)).to.be(0);
      });

    });

    describe('#resize()', () => {

      it('should resize existing sections in the list', () => {
        var obj = new SectionList();
        obj.resize(0, 50, 10);
        expect(obj.size).to.be(0);
        expect(obj.count).to.be(0);
        obj.insert(0, 100, 10);
        obj.resize(50, 10, 20);
        expect(obj.size).to.be(1100);
        expect(obj.sizeOf(50)).to.be(20);
        expect(obj.sizeOf(40)).to.be(10);
        expect(obj.sizeOf(60)).to.be(10);
        obj.resize(0, 100, 1);
        expect(obj.size).to.be(100);
        expect(obj.sizeOf(50)).to.be(1);
        expect(obj.sizeOf(40)).to.be(1);
        expect(obj.sizeOf(60)).to.be(1);
      });

      it('should only resize valid sections', () => {
        var obj = new SectionList();
        obj.insert(0, 100, 10);
        obj.resize(-120, 10, 1);
        obj.resize(-120, 130, 5);
        obj.resize(90, 200, 20);
        expect(obj.size).to.be(1050);
        expect(obj.count).to.be(100);
        expect(obj.sizeOf(0)).to.be(5);
        expect(obj.sizeOf(9)).to.be(5);
        expect(obj.sizeOf(10)).to.be(10);
        expect(obj.sizeOf(89)).to.be(10);
        expect(obj.sizeOf(90)).to.be(20);
        expect(obj.sizeOf(99)).to.be(20);
      });

      it('should be a no-op if count `<= 0`', () => {
        var obj = new SectionList();
        obj.insert(0, 100, 10);
        obj.resize(0, 0, 20);
        expect(obj.size).to.be(1000);
        expect(obj.sizeOf(0)).to.be(10);
        obj.resize(0, -100, 20);
        expect(obj.size).to.be(1000);
        expect(obj.sizeOf(0)).to.be(10);
      });

      it('should clamp the size to `[0, Infinity]', () => {
        var obj = new SectionList();
        obj.insert(0, 100, 10);
        obj.resize(0, 10, -10);
        expect(obj.sizeOf(0)).to.be(0);
        expect(obj.sizeOf(9)).to.be(0);
        expect(obj.sizeOf(10)).to.be(10);
        expect(obj.sizeOf(99)).to.be(10);
        obj.resize(0, 10, Infinity);
        expect(obj.sizeOf(0)).to.be(Infinity);
        expect(obj.sizeOf(9)).to.be(Infinity);
        expect(obj.sizeOf(10)).to.be(10);
        expect(obj.sizeOf(99)).to.be(10);
      });

      it('should return the actual number of sections resized', () => {
        var obj = new SectionList();
        obj.insert(0, 100, 10);
        expect(obj.resize(-120, 130, 5)).to.be(10);
        expect(obj.resize(90, 200, 20)).to.be(10);
        expect(obj.resize(25, 40, 20)).to.be(40);
      });

    });

  });

});
