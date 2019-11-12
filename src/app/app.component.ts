import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Signum Global Advisors';

  sendCharlesMessage(){
    alert("Charles Myers was most \n\n recently Vice Chairman of Evercore ISI and a member of Evercore ISI's Executive Committee and Investment Policy Committee. He was the founding partner of Evercore's Institutional Equities business in 2009. Prior to Evercore, Charles was a Board Member and Managing Director of Fox-Pitt Kelton, which he joined in 2004. He held a number of senior positions during his tenure, and as Global Head of Equities, was responsible for research, sales and trading of all equities products across the United States, Europe and Asia. Charles has over 25 years experience in global capital markets, having worked previously at UBS. Charles serves on the Board of Trustees of the Central Park Conservancy, the Board of the Mayor's Fund for NYC, and previously served on the NYC Host Committee for the 2016 Democratic Convention. He also has over 20 years experience in US electoral politics, having advised numerous presidential, congressional, gubernatorial and mayoral campaigns. He served as a senior member of the Finance Committees of the 2008 and 2012 Obama Presidential campaigns as well as the 2016 Hillary Clinton for President campaign. An American citizen, Charles grew up in Libya, Peru and Indonesia, has a B.A. from Amherst College in Massachusetts and a post-graduate M. Phil degree from Cambridge University in England. He lives in New York City with his four children.");
  };

  sendAndrewsMessage(){
    alert("This is Andrew's alert message!");
  }

  sendAngelasMessage(){
    alert("This is Angela's alert message!");
  }

  sendAnnasMessage(){
    alert("This is Anna's alert message!");
  }

  sendJasonsMessage(){
    alert("This is Jason's alert message!");
  }
}

