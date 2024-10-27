import React, {ReactNode} from "react";
import Image from 'next/image'

import {Layout as AntLayout, Menu, Typography} from 'antd';
import logo from '@/public/images/logo.png'
import {AUTHOR, COMPANY} from "@/constants";
import styled from "styled-components";
import {useRouter} from "next/navigation";
const {Header, Footer, Content} = AntLayout;

const ContentContainer = styled.div`
      min-height: 280px;
      padding: 24px;
  `

export default function Layout({children}:{children:ReactNode}) {
  const router = useRouter();

  const items = [
    {
      key: 0,
      label: "HomePage",
      onClick: () => router.push('/')
    }
  ]

  return (
    <>
      <AntLayout>
        <Header style={{display: 'flex', alignItems: 'center'}}>
          <Image
            src={logo}
            alt="Landscape picture"
            width={50}
          />
          <Menu
            theme="dark"
            mode="horizontal"
            items={items}
            style={{flex: 1, minWidth: 0, marginLeft:'20px'}}
          />
        </Header>
        <Content style={{padding: '0 48px'}}>
          <ContentContainer>
            {children}
          </ContentContainer>
        </Content>
        <Footer style={{textAlign: 'center'}}>
          <Typography.Text disabled>
          {AUTHOR} ©{new Date().getFullYear()} {COMPANY}
          </Typography.Text>
        </Footer>
      </AntLayout>
    </>
  )
}