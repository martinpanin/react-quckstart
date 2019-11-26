import React, { Component } from 'react';



class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
            hide:false,
            bg:false,
            edit:false,
            title:'Eesti veespordialade Kool',
            subTitle: "KLUBISISESED VÕISTLUSED 2019/2020. ÕA I POOLAASTA",
            name:"Nimi",
            place:"Koht",
            date:"1 detsember 2019",
            info:" Eesti Veespordialade Kooli  juhatuse liikmed ja komisjon",
            category:"kujundujumise edasijõudnute figuurid",
            category2:'(_______a sündinud ja nooremad)'
        };
      };

        componentDidMount(){


        }
  
        handleHide=()=>{
          this.setState({
            hide:!this.state.hide
          })
        }

        handleBg=()=>{
          const body = document.querySelector('#root')
          
          this.setState({
            bg:!this.state.bg
          })

          if(this.state.bg){
            body.classList.remove("bg2")
            body.classList.add("bg1")
          } else{
            body.classList.remove("bg1")
            body.classList.add("bg2")
          }
          
        }
        
        handleEdit=()=>{
          this.setState({
            edit:!this.state.edit
          })
        }
        handleChange =(event)=>{
          this.setState({
              [event.target.name]: event.target.value,
          });
      }

  render({hide, edit, title,subTitle,name,place,date,info,category, category2} = this.state) {
    return (
      <React.Fragment>
        <section className={hide? `hidden absolute basis100` : 'absolute basis100'} style={{top:0, left:0}}>
          <button onClick={this.handleHide} className={hide? `hidden` : ''}> Hide</button>
          <button onClick={this.handleBg} className={hide? `hidden` : ''}> BG</button>
          <button onClick={this.handleEdit} className={hide? `hidden` : ''}> Edit</button>
        </section>
        <section className={`container gridX`}>
        
          <section className={`logo gridX basis100 justifyCenter textCenter`}>
            <img src="/img/logo.svg"/>
          </section>
          <section className={`gridX basis100 justifyCenter uppercase`}>
            {edit? <input type={`text`} onChange={this.handleChange} name={`title`} value={title}/> : 
            <h1 className={`basis100 justifyCenter alignCenter`}>{title}</h1>}
            {edit? <input type={`text`} onChange={this.handleChange} name={`subTitle`} value={subTitle}/> : 
            <h2 className={`basis100 justifyCenter alignCenter`}>{subTitle}</h2>}
          </section>
          <section className={`gridX basis100 justifyCenter uppercase`}>
          {edit? <input type={`text`} onChange={this.handleChange} name={`name`} value={name}/> : 
          <h3 className={`basis100 line justifyCenter alignLeft textleft`}>{name}</h3>}
          {edit? <input type={`text`} onChange={this.handleChange} name={`place`} value={place}/> : 
           <h3 className={`basis100 line justifyCenter alignLeft textleft`}>{place}</h3>}
            
           
          </section>
          <section className={`gridX basis100 justifyCenter alignLeft`}>
          {edit? <input type={`text`} onChange={this.handleChange} name={`category`} value={category}/>
         : 
          <h3 className={`basis100 justifyCenter m-0 alignCenter`}>{category}<br/>{category2}</h3>}
           {edit? <input type={`text`} onChange={this.handleChange} name={`category2`} value={category2}/>:''}
  
          </section>
          <section className={`gridX basis100 justifyCenter alignRight`}>
          {edit? <input type={`text`} onChange={this.handleChange} name={`date`} value={date}/> :  
          <h4 className={`basis50 justifyCenter alignLeft textleft uppercase`}>{date}</h4>}
          {edit? <input type={`text`} onChange={this.handleChange} name={`info`} value={info}/> : 
          <h4 className={`basis50 justifyCenter alignRight textRight`}>{info}</h4>}
           
            
          </section>
        </section>

      </React.Fragment>
    );
  }
}

export default App;
