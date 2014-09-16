import Ember from 'ember';

export default Ember.TextArea.extend({
  didInsertElement: function () {
    var editor = CKEDITOR.replace(this.get('elementId'), {
      language: 'zh-cn'
    });

    editor.on('change', function (evt) {
      if (evt.editor.checkDirty()) {
        this.set('value', editor.getData());
      }
    }.bind(this));

    this.set('editor', editor);
  },

  willDestroyElement: function () {
    this.get('editor').destroy(false);
  }
});
