import { Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
    constructor(private mailService : MailService){}


    @Post()
    async sendMail(){
        return await this.mailService.sendMail()
    }
}
