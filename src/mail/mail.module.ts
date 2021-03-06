import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: 'nurceandrea2@gmail.com',
          pass: 'elefanti123456',
        },
      },
      defaults: {
        from: '"No Reply" <nurceandrea2@gmail.com>',
      },
      preview: true,
      template: {
        dir: './src/mail/templates/',
        adapter: new PugAdapter(), // or new PugAdapter()
        options: {
          strict: false,
        },
      },
    }),
  ],
  controllers: [MailController],
  providers: [MailService],
})
export class MailModule {}
