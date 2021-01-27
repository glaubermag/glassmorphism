import { Container, Header, Info, InfoCard, InfoTitle, CardTitle, CardChip, CardFooter } from './styles';
import bottomLeft from '../../assets/images/bottomLeft.png'
import rightImg from '../../assets/images/rightImg.png'
import topImg from '../../assets/images/topImg.png'
import chip from '../../assets/images/chip.png'

function Home() {
  return (
    <Container>
      <Header>
        <img src={bottomLeft} id="bottomLeft" alt="bottomLeft"></img>
        <img src={rightImg} id="righImg" alt="rightImg"></img>
        <img src={topImg} id="topImg" alt="topImg"></img>
        <Info>
          <InfoTitle><h1> Worlwide Purchase Access From Your Platinum Card </h1>
            <p> Free upgrade option to our platinum services and get lifetime validity.</p>
            <div> <input type="text" placeholder="Your Email"></input>
              <button type="submit">APPLY</button>
            </div>
          </InfoTitle>
          <InfoCard>
            <CardTitle> <h2> Platinum Card </h2></CardTitle>
            <CardChip> <img src={chip} id="chip" alt="chip"></img>
            </CardChip>
            <CardFooter>
              <h2> 6689 2547 2265 1258 </h2>

              <div>
                <p class="alignleft">GLAUBER MAGALHÃES</p>
                <p class="alignright">02/49</p>
              </div>

            </CardFooter>

          </InfoCard>
        </Info>
      </Header>
    </Container>);
}

export default Home;
