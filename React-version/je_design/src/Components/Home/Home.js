import React, { Component, Fragment } from 'react'
import './Home.css'

class Home extends Component {
    render() {
        return(
            <Fragment>
                <div className="containerHome">
                    <img src={require('./julien.JPG')} alt='Julien' className="homeImg"></img>
                    <section className="homeText">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna fringilla urna porttitor rhoncus dolor purus non enim. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Ornare lectus sit amet est placerat. Arcu bibendum at varius vel pharetra vel turpis. Massa massa ultricies mi quis hendrerit. At imperdiet dui accumsan sit amet nulla facilisi morbi. Maecenas sed enim ut sem viverra aliquet eget sit. Quisque non tellus orci ac auctor. Viverra accumsan in nisl nisi scelerisque eu ultrices. Massa id neque aliquam vestibulum morbi blandit cursus risus. Maecenas ultricies mi eget mauris pharetra et.em</p>
                        <p>Id diam vel quam elementum. Ut lectus arcu bibendum at varius. Pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies. Donec pretium vulputate sapien nec. Quisque non tellus orci ac. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Suspendisse in est ante in nibh mauris cursus mattis. Mattis vulputate enim nulla aliquet. Lorem sed risus ultricies tristique nulla aliquet enim. Elementum pulvinar etiam non quam. Turpis massa sed elementum tempus egestas sed sed risus. Venenatis urna cursus eget nunc scelerisque viverra mauris. Ut porttitor leo a diam. Et netus et malesuada fames. Et odio pellentesque diam volutpat commodo sed. Leo in vitae turpis massa sed elementum tempus egestas.</p>
                    </section>
                </div>
            </Fragment>
        )
    }
}
export default Home