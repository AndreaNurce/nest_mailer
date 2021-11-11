import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private mailService: MailerService) {}
  public async sendMail() {
    return this.mailService.sendMail({
      to: 'andrea-dibra@hotmail.com',
      from: 'nurceandrea2@gmail.com',
      subject: 'testing nest mailer with template',
      template: './index',
      context: {
        name: 'df',
        url: 'asdfasdf',
      },
    });
  }
}
