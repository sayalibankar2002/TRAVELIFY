import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations In Pune!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/waterfall.jpg'
              text='Explore the hidden waterfall deep inside the Sahyadari Jungle'
              label='Nature'
              path='/services'
            />
            <CardItem
              src='images/pam.jpg'
              text='Panshet Dam, also called Tanajisagar Dam, is a dam on the Ambi river near by Pune'
              label='Waterside'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/shindechatri.jpg'
              text='Shinde Chatri is The Memorial Dedicated to the 18th Century Maratha Militry Leader Mahadji Shinde'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/kasarsai.jpg'
              text='Experience peace in the calm water of Kasar Sai Dam'
              label='Waterside'
              path='/products'
            />
            <CardItem
              src='images/dagadusheth.jpg'
              text='Visit Shreemant Dagadusheth Halwai Ganapati Mandir Committed to Lord Ganesha'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/sinhagad.jpg'
              text='Sinhagad,earlier known as "Kondhana" is the most prominent and popular fort in Pune'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/swaminarayan.jpg'
              text='Experience Great Architecture of Swaminarayan Temple'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/agakhan.jpg'
              text="Aga Khan Palace served as the National Monument of India's freedom movement" 
              label='Nature'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/baner.jpg'
              text='Visit Baner High Street for the ultimate post-work drinking and dining'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/tulashibag.jpg'
              text='Tulsi Baug is famous for budget shopping '
              label='Luxury'
              path='/products'
            />
            <CardItem
              src='images/pataleshawar.jpg'
              text='Visit the Pataleshwar Caves which are 8th century rock-cut Hindu Temple from The Rashtrakuta period'
              label='Mystery'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/osho.jpg'
              text='Osho Garden is a Japanese Zen garden founded by Shunyo foundation it is Considered one of the most beautiful gardens in Pune.'
              label='Nature'
              path='/services'
            />
            <CardItem
              src='images/lonavala.jpg'
              text='Lonavala is the most Beautiful Hill Station In Pune '
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/zoo1.jpg'
              text='Rajiv Gandhi Zoological Park is a famous tourist and recreational attraction in Pune'
              label='Wildlife'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
