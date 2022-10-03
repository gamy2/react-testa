import React from 'react';
import { connect } from 'react-redux';
import { changeLanng } from '../../store/actions/lang';
import { changeUserName } from '../../store/actions/userAction';
import { changeProducts } from '../../store/actions/products';
import PagesHeader from '../layout/PagesHeader';

class HomePage extends React.Component {
constructor(){
    super();
  this.state={
    name: 'moSalah',
  }
}
 langHandler=()=>{
    let _this=this;
    console.log(this.props.lang)
    this.props.changeLanng(_this.props.lang=="en"?"ar":"en")
 }

    render() {
        
        return (
            <>
            <PagesHeader />
            <div>   
                {this.props.lang=="en"?"ali":"على"}
            {" "+this.props.lang}

            </div>
            <button className="btn btn-primary" onClick={()=> this.langHandler()}>Button</button>
            </>
        );
        }
        
}


const mapStateToProps=(state)=>{
    return {
        lang: state.lang.lang,
        user: state.user
    }
}
export default connect(mapStateToProps,{changeLanng,changeProducts})(HomePage);