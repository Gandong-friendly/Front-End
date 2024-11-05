import { NextAuthOptions } from 'next-auth'
import KakaoProvider from 'next-auth/providers/kakao';

export const authOptions: NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID as string,
      clientSecret: process.env.KAKAO_CLIENT_SECRET as string
    })
  ],
  // testing
  session: {
    strategy: 'jwt',
  },
  // callbacks: {
  //   async signIn ({user}) {
  //     const response = await fetch(``, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({name : user.name}),
  //     });

  //   }
  // }
}