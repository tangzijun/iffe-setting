import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";
import {
  DesTitle,
  BigTitle,
  DefaultTitle,
  Button,
  Input,
  SmallTitle,
  ThemeWrap,
} from "solidoc-base-component-lib";

/**
 * @description: 登录页面
 * @param {type}
 * @return:
 */

const useStyles = makeStyles((theme) => ({
  LogIn: {
    display: "flex",
    alignItems: "center",
    position: "fixed",
  },
  background: {
    width: "100%",
    height: "100%",
    position: "fixed",
    bottom: 0,
    right: 0,
    left: 0,
    transition: "opacity 0.4s ease",
    opacity: 1,
    pointerEvents: "none",
    zIndex: -1,
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 1,
    transition: "opacity 0.2s linear 0.2s",
  },
  LogInContentWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "100vw",
    maxWidth: "1500px",
    minWidth: "550px",
    minHeight: "100vh",
  },
  LogInContent: {
    display: "flex",
    padding: 32,
    borderRadius: 5,
    background: theme.app.Setting.color14,
  },
  left: {
    display: "flex",
    width: 414,
    flexDirection: "column",
  },
  right: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: 240,
    height: 344,
    marginLeft: 66,
  },
  qrcode: {
    width: 176,
    height: 176,
    marginBottom: 32,
  },
}));

function LogInWrap(props) {
  const { url, QRcode } = props;
  let history = useHistory();
  const getWindowSize = () => ({
    innerWidth: window.innerWidth,
  });

  const [windowSize, setWindowSize] = useState(getWindowSize());
  const handleResize = () => {
    setWindowSize(getWindowSize());
  };
  useEffect(() => {
    // 监听
    window.addEventListener("resize", handleResize);
    // 销毁
    return () => window.removeEventListener("resize", handleResize);
  });

  const classes = useStyles();
  return (
    <ThemeWrap>
      <div className={classes.LogIn}>
        <div className={classes.background}>
          <img className={classes.image} src={url} alt=""></img>
        </div>
        <div className={classes.LogInContentWrap}>
          <div className={classes.LogInContent}>
            <div className={classes.left}>
              <BigTitle position={"center"}>欢迎回来！</BigTitle>
              <Box height={8} />
              <DefaultTitle
                position={"center"}
                style={{ color: "rgb(185,187,190)" }}
              >
                很高兴再次见到您！
              </DefaultTitle>
              <Box height={20} />
              <DesTitle>电子邮件</DesTitle>
              <Box height={8} />
              <Input />
              <Box height={8} />
              <DesTitle>密码</DesTitle>
              <Box height={8} />
              <Input />
              <Box height={4} />
              <Button type={"link"} href={"https://www.baidu.com/"}>
                忘记密码？
              </Button>
              <Box height={20} />
              <Button
                type={"primary"}
                block={true}
                onClick={(e) => {
                  console.log(e.target);
                  history.push("setting");
                }}
              >
                登录
              </Button>
              <Box height={8} />
              <SmallTitle>
                需要新的账号?<span>&nbsp;</span>
                <Button
                  type={"link"}
                  href={"https://tangzijun.github.io/setting"}
                >
                  注册
                </Button>
              </SmallTitle>
            </div>
            {QRcode && windowSize.innerWidth > 830 && (
              <div className={classes.right}>
                <div className={classes.qrcode}>
                  <img
                    className={classes.qrcode}
                    src={
                      "http://img0.imgtn.bdimg.com/it/u=2897236439,4117628495&fm=26&gp=0.jpg"
                    }
                    alt=""
                  />
                </div>
                <BigTitle position={"center"}>通过二维码登录</BigTitle>
                <Box height={8} />
                <DefaultTitle
                  position={"center"}
                  style={{ color: "rgb(185,187,190)" }}
                >
                  通过使用手机App扫描二维码,
                </DefaultTitle>
                <Box height={8} />
                <DefaultTitle
                  position={"center"}
                  style={{ color: "rgb(185,187,190)" }}
                >
                  便可即时登录。
                </DefaultTitle>
              </div>
            )}
          </div>
        </div>
      </div>
    </ThemeWrap>
  );
}
export { LogInWrap };
