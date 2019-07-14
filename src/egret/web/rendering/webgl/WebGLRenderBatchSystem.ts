//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

namespace egret.web {

    export class WebGLRenderBatchSystem {

        private readonly _webGLRenderContext: WebGLRenderContext;
        public readonly _vao: WebGLVertexArrayObject;

        constructor(webGLRenderContext: WebGLRenderContext, _vao: WebGLVertexArrayObject) {
            this._webGLRenderContext = webGLRenderContext;
            this._vao = _vao;
        }

        public start(): void {
            this._webGLRenderContext.resetVertexAttribPointer = true;
            this._vao.clear();
        }

        public stop(): void {
            this.flush();
        }

        public flush(): void {
            //this._vao.bind();
            this._webGLRenderContext.$drawWebGL(this._vao);
            this._vao.clear();
        }

        public render(): void {

        }
    }

    export class EmptyBatchSystem extends WebGLRenderBatchSystem {
    }

    export class SpriteBatchSystem extends WebGLRenderBatchSystem {

        // public start(): void {
        //     window['a'] = 1;
        //     super.start();
        // }

        // public stop(): void {
        //     super.stop();
        // }
    }

    export class MeshBatchSystem extends WebGLRenderBatchSystem {

        // public start(): void {
        //     window['a'] = 1;
        //     super.start();
        // }

        // public stop(): void {
        //     super.stop();
        // }
    }
}
