<template>
  <div>
    <div class="title">
      <el-input v-model="articleTitle" placeholder="输入文章标题..."></el-input>
      <div class="save_state">{{ save }}</div>
      <div class="button">
        <el-button type="primary">草稿箱</el-button>
        <el-button type="primary">发布</el-button>
      </div>
    </div>
    <div class="write_wrapper">
      <div id="edit">
        <div style="border-bottom: 0px solid #e8e8e8">
          <div id="toolbar-container"></div>
        </div>
        <div class="contentWrapper">
          <div id="content">
            <div id="editor-container"></div>
          </div>
        </div>
      </div>
      <div class="preview">
        <div id="preview"></div>
      </div>
    </div>
  </div>
</template>

<script>
import '@wangeditor/editor/dist/css/style.css'
import {
  createEditor,
  createToolbar,
  DomEditor,
  IEditorConfig,
  SlateElement,
  Boot,
  IDomEditor,
} from '@wangeditor/editor'
import markdownModule from '@wangeditor/plugin-md'
import { log } from 'three'

export default {
  data() {
    return {
      articleTitle: '',
      save: '',
      contentStr: null,
      count: 0,
      newValue: '',
      previewDiv: null,
    }
  },
  mounted() {
    this.previewDiv = document.getElementById('preview')
    Boot.registerModule(markdownModule)
    const editorConfig = { MENU_CONF: {} }
    //输入内容时触发事件
    editorConfig.onChange = (editor) => {
      this.save = '保存中...'
      this.contentStr = JSON.stringify(editor.children)

      this.changeNbsp(editor.getHtml())
    }

    editorConfig.placeholder = '请输入内容'
    //字体大小
    editorConfig.MENU_CONF['fontSize'] = {
      fontSizeList: [
        '8px',
        '9px',
        '10px',
        '11px',
        '12px',
        '14px',
        '16px',
        '18px',
        '20px',
        '22px',
        '24px',
        '26px',
        '28px',
        '30px',
        '32px',
        '34px',
        '40px',
      ],
    }
    //行高
    editorConfig.MENU_CONF['lineHeight'] = {
      lineHeightList: ['1', '1.5', '2', '2.5', '3', '3.5', '4'],
    }

    //上传图片
    editorConfig.MENU_CONF['uploadImage'] = {
      server: '/projectApi/juggle-fileplat/api/file/file/save.json',
      base64LimitKB: 1000,
      headers: {
        token: this.token,
      },
      onBeforeUpload(files) {
        // files 即选中的文件列表
        console.log('files', files)
        return files

        // 返回值可选择：
        // 1. 返回一个数组（files 或者 files 的一部分），则将上传返回结果中的文件
        // 2. 返回 false ，则终止上传
      },
      onSuccess(file, res) {
        console.log(`${file.name} 上传成功`, res)
      },
      onProgress(progress) {
        // progress 是 0-100 的数字
        console.log('progress', progress)
      },
    }

    window.editorConfig = editorConfig

    // 创建编辑器
    const editor = createEditor({
      selector: '#editor-container',
      config: editorConfig,
      content: [], // 重新编辑功能
      mode: 'default', // 或者 'simple' ，下文有解释
    })
    window.editor = editor
    //tab键缩进
    editor.handleTab = () => editor.insertText('    ')
    // 创建工具栏
    const toolbar = createToolbar({
      editor,
      selector: '#toolbar-container',
      mode: 'default', // 或者 'simple' ，下文有解释
    })
    let uploadImage = editor.getMenuConfig('uploadImage')
    console.log('uploadImage', uploadImage)
  },

  methods: {
    preview() {
      // editor.destroy()
      this.contentStr = JSON.stringify(editor.children)
      console.log('this.contentStr', editor.getHtml())
      this.changeNbsp(editor.getHtml())
      // let contentStr = this.contentStr
      // const editor = createEditor({ contentStr })
      // clearTimeout(timer)
      // let timer = setTimeout(() => {
      //   this.showHtml()
      // }, 500)
    },
    // showHtml() {
    //   //第二次不需要重新创建div
    //   if (this.count >= 1) {
    //     let inner = editor.getHtml()
    //     this.changeNbsp(inner)
    //     this.div.innerHTML = this.newValue
    //   } else {
    //     let showHtml = document.getElementById('showHtml')
    //     this.div = document.createElement('div')
    //     this.div.id = 'pdfWapper'
    //     this.div.style.width = '90%'
    //     let inner = editor.getHtml()
    //     this.changeNbsp(inner)
    //     this.div.innerHTML = this.newValue
    //     showHtml.appendChild(this.div)
    //     this.count++
    //   }
    // },
    changeNbsp(val) {
      const spaceRex1 = /(<.*?>)(.*?)(<.*?>)/g
      const spaceRex2 = /\s/g
      let newVal = val.replace(/\t/g, '&nbsp;&nbsp;')
      newVal = newVal.replace(spaceRex1, (str, $1, $2, $3) => {
        return [$1, $2.replace(spaceRex2, '&nbsp;&nbsp;&nbsp;&nbsp;'), $3].join(
          ''
        )
      })
      this.newValue = newVal
      console.log(this.newValue)
      this.previewDiv.innerHTML = this.newValue
      let code = document.getElementsByTagName('code')
      if (Array.isArray(code)) {
        code.forEach((item) => {
          item.classList.add('code_text')
        })
      }

      setTimeout(() => {
        this.save = '保存成功'
      }, 1000)
    },
  },
}
</script>

<style lang="less" scoped>
.ptext {
  margin: 1.5rem 0;
}
/deep/.language-javascript {
  color: #333;
  background: #f8f8f8;
  font-size: 12px;
  padding: 15px 12px;
  margin: 0;
  word-break: normal;
  display: block;
  overflow-x: auto;
}
.title {
  display: flex;
  border-bottom: 1px solid #efefef;
  background-color: #fff;
  /deep/.el-input {
    width: 70%;
  }
  /deep/.el-input__inner {
    border: 0;

    height: 6rem;
    font-size: 3rem;
    font-family: '微软雅黑';
  }
  .save_state {
    margin-left: auto;
    line-height: 6rem;
    color: #d1d1d1;
    font-size: 1.6rem;
    height: 6rem;
    font-family: '微软雅黑';
    font-weight: 700;
  }
  .button {
    padding: 0 2rem;
    line-height: 6rem;
  }
}
.write_wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  #edit {
    width: 50%;
  }
  /deep/.w-e-text-container {
    min-height: 93.6rem;
  }
  .preview {
    width: 49.9%;
    margin-left: auto;
    background-color: #fff;
    border-left: 1px solid #efefef;
    #preview {
      padding: 4rem;
    }
  }
}
</style>
