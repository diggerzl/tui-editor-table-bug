import { AfterViewInit, Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import Editor from '@toast-ui/editor';

@Component({
  selector: 'app-root',
  template: `
    <h5>Input</h5>
    <div class="input">{{input}}</div>
    <h5>Output</h5>
    <div class="output">{{output}}</div>
  
    <div id="editor"> </div>
  `,
})
export class App implements AfterViewInit {
  editor!: Editor

  input: string = 
      `<table>
        <thead>
          <tr>
            <th align="left"><p>header1</p></th>
            <th align="center"><p>header 2</p></th>
            <th align="right"><p>header 3</p></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="left"><p>some text content 1</p></td>
            <td align="center"><p>some text content 2</p></td>
            <td align="right"><p>some content 3</p></td>
          </tr>
        </tbody>
      </table>`;
  output: string = ''

  ngAfterViewInit(): void {
    const editor = this.editor = new Editor({
      el: document.querySelector('#editor') as HTMLDivElement,
      height: '500px',
      initialEditType: 'wysiwyg',
      initialValue: this.input,
      previewStyle: 'vertical',
    });
    
    console.log('test');
    this.output = editor.getHTML();
  }
}

bootstrapApplication(App);
