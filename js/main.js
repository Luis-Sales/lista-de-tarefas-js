

const Main = {


     // aqui chamo as funções
    init: function () {
        this.cacheSelectors()
        this.bindEvents()
        
    },


     // aqui pego os elementos
    cacheSelectors: function () {
        this.checkButtons = document.querySelectorAll('.check')
        this.$inputTask   = document.querySelector('#inputTask')
        this.$list   = document.querySelector('#list')
        this.removeButtons = document.querySelectorAll('.remove')
       
    },


    // aqui execulto as funções com os elementos que peguei
    bindEvents: function () { 
        const self = this // para o this ser reconhecido como essa função e não do window

        this.checkButtons.forEach(function (button){
          button.onclick = self.events.checkButton_click
        })

        this.$inputTask.onkeypress = self.events.inputTask_keypress.bind(this)

        this.removeButtons.forEach(function (button){
            button.onclick = self.events.removeButton_click
        })


    },

    // aqui tenhos meus eventos de clicks etc...
    events:{ 
        checkButton_click: function(e) { 
        const li = e.target.parentElement
        const existe = li.classList.contains('done')

        if(existe){
            li.classList.remove('done')  
        } 
        else{
             li.classList.add('done')
        }
        },

        inputTask_keypress: function(e)
        {
            const key = e.key
            const value = e.target.value

            if(key === "Enter"){

                  this.$list.innerHTML += `
                    <li >
                        <div class="check"></div>
                            <label class="task" for="">
                                ${value} 
                            </label>
                        <button class="remove"></button>
                    </li>
                `
                e.target.value = ""

                this.cacheSelectors()
                this.bindEvents()
            }
        },

        removeButton_click: function(e){
            const li = e.target.parentElement

            li.classList.add('hidden')
        }

    },
    
}

Main.init()