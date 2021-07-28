export default {
  privacy: {
    name: '김덕원',
    job: '웹 프론트엔드 개발자',
    profile: 'https://avatars3.githubusercontent.com/u/12786855?s=460&u=f550803f0e4cfa0ff46a50b477cad324dbb1958f&v=4',
    updated: '2021-07-28',
    email: 'villain406@kakao.com',
    phone: '010-8557-8011',
    introduce: `저는 서비스의 발전 및 개선을 통해 뿌듯함을 느끼는 것을 좋아합니다. 코드의 가치는 비즈니스적 가치를 창출할 수 있을 때 나온다고 생각합니다.`,
    buttons: [
      {
        icon: 'images/github.svg',
        url: 'https://github.com/KimChunsick'
      }
    ]
  },
  careers: [
    {
      company: '하이어엑스',
			position: 'Frontend Developer',
			description: `업무 관리 및 todo list 공유 서비스 워키도키 (전. 알바체크) 서비스 개발
			
			무인 매장에 필요한 시간에 필요한 인력을 배치하는 브라우니 서비스 개발`,
      date: '2018.12 ~',
			projects: [
				{
					name: '브라우니 웹 프론트',
					date: '2021.05 ~ ',
					description: '브라우니 서비스 웹 프론트엔드 입니다.',
					works: [
						'Sentry를 활용한 에러 감지 시스템 구축',
						'Lambda와 CloudFront를 활용하여 SSR을 사용하지 않고도, 임의의 URL 주소에 접근할 수 있게 인프라 구축'
					],
					skills: [
						{
							icon: 'images/react.svg',
							name: 'React'
						},
						{
              icon: 'images/typescript.svg',
              name: 'TypeScript'
						}
					]
				},
				{
					name: '브라우니 어드민 (서버 및 프론트)',
					date: '2021.05 ~ ',
					description: '브라우니 서비스 운영을 위한 어드민 서비스입니다.',
					works: [
						'Sentry를 활용한 에러 감지 시스템 구축',
						'react-admin template를 활용하여 제작',
						'운영을 위한 어드민 개발로 운영 관련 개발 인력 배치 최소화 유도'
					],
					skills: [
						{
							icon: 'images/koa.svg',
							name: 'koa'
						},
						{
              icon: 'images/typescript.svg',
              name: 'TypeScript'
						},
						{
              icon: 'images/javascript.svg',
              name: 'JavaScript'
						},
						{
							icon: 'images/react.svg',
							name: 'React'
						}
					]
				},
				{
					name: '브라우니 메세지 서버',
					date: '2021.05 ~ ',
					description: '브라우니 서비스에 사용되는 카카오 알림톡, Slack Bot 연동 등을 전담하여 전송하는 서버입니다.',
					works: [
						'Sentry를 활용한 에러 감지 시스템 구축',
						'카카오톡 알림톡, Slack 채널 메세지, 이메일, 문자 기능 REST API로 제작 하여 개발 팀원들 모두 간편하게 사용할 수 있게 제작',
						'중복된 코드들을 별도의 서버로 미리 개발하여, 개발팀 전체 개발 시간 감소 및 코드 응집성을 향상시킴',
						'EC2 대상 그룹과 CodeDeploy의 HalfAtATime를 사용해 간단하게 무중단 배포 구현'
					],
					skills: [
						{
							icon: 'images/koa.svg',
							name: 'koa'
						},
						{
              icon: 'images/typescript.svg',
              name: 'TypeScript'
            }
					]
				},
				{
					name: '브라우니 결제서버',
					date: '2021.05 ~ ',
					description: '브라우니 서비스에 사용되는 결제 서버를 구현 및 유지보수를 담당했습니다.',
					works: [
						'PG사 (KG 이니시스)를 통한 결제 구현',
						'카드결제, 계좌이체, 무통장입금 결제, 환불 구현',
						'모바일 결제 구현',
						'결제 환불 기능 구현 (환불, 부분 환불 모두 가능)',
						'각 환불 상황에 따라 포인트, 쿠폰 정책 구현',
						'쿠폰 발급,만료 기능 구현',
						'서비스 횟수 추가, 가격 (할인, 할인률), 지역 등등 조건에 따른 쿠폰 기능 추가',
						'포인트 발급, 만료, 환불 기능 구현',
						'Sentry를 활용한 에러 감지 시스템 구축',
						'EC2 대상 그룹과 CodeDeploy의 HalfAtATime를 사용해 간단하게 무중단 배포 구현'
					],
					skills: [
						{
							icon: 'images/koa.svg',
							name: 'koa'
						},
						{
              icon: 'images/typescript.svg',
              name: 'TypeScript'
            }
					]
				},
				{
					name: '워키도키, 브라우니 서비스 인프라 구성 및 유지보수',
					date: '2021.04 ~ ',
					description: '워키도키 인프라 유지보수 및 브라우니 서비스 인프라 구성',
					works: [
						'CodePipeline으로 CI/CD 프로세스 구성',
						'EC2 대상 그룹과 CodeDeploy의 HalfAtATime를 사용해 간단하게 무중단 배포 구현',
						'CloudFront를 활용한 정적 리소스 비용 절감 및 CDN 구성',
						'Lambda와 CloudFront를 활용하여 SSR을 사용하지 않고도, 임의의 URL 주소에 접근할 수 있게 인프라 구축',
						'ElastiCache, RDS, EC2등 모든 환경 셋업'
					]
				},
				{
					name: '하이어엑스 Platform DEV 파트장',
					date: '2021.04 ~ ',
					description: '하이어엑스 개발 관련 모든 일정 관리, 개발 인원 배치, 개발 관련 커뮤니케이션 담당 등 팀 매니징 업무 진행',
					works: [
						'워키도키, 브라우니 개발 및 배포 일정 관리',
						'다른 파트와 커뮤니케이션 대응',
						'파트너사 관련 커뮤니케이션 대응'
					]
				},
        {
          name: '워키도키 백오피스',
          date: '2019.08 ~ 2020.06',
          description: '회사 내부적으로 데이터확인 CS관리등을 위해 제작한 어드민 페이지입니다. 현재는 어드민 페이지를 새로 개발함으로써, 기존 프로젝트는 중단되었습니다.',
          works: [ '유저 데이터 관리 기능 제작', '매장 데이터 관리 기능 제작', 'B2B 본사(HQ)용 간단한 데이터 접근, 수정 및 통계 기능 제작' ],
          skills: [
            {
              icon: 'images/vue.svg',
              name: 'Vue'
            },
            {
              icon: 'images/typescript.svg',
              name: 'TypeScript'
            }
          ]
        },
        {
          name: '워키도키 앱 프론트',
          date: '2019.01 ~ 2021.04',
          description: `워키도키 웹앱에 사용되는 앱 프론트를 제작했습니다.`,
					works: [
						'JWT 인증 개발',
						'컴포넌트 재사용성을 위해 Atomic Design 적용',
						'인앱 결제, PG사(페이플)을 통한 결제 구현',
						'네이티브 웹뷰와 원활한 데이터 교환을 위한 JS Bridge용 라이브러리 제작',
						'원활한 에러 추적을 위한 에러 로깅 시스템 연동',
						'패키지 최적화를 통해 초기 로딩 속도 최적화',
						'사용자 행동 분석툴 (Amplitude, Beausable 등) 및 데이터를 활용하여 개선점 도출 후, 디 자이너, 그로스마케터와 함께 작업하여 리텐셜 증가 유도, 초기 D.1 ~ D.14의 구간에서 기존 19.8% -> 67.6%로 약 47.8%의 리텐셜 증가율을 획득 함, 기여한부분: funnel 구성 참여 및 개선점 도출 검증 셋업 작업, 해당 기획 프론트 구현',
						'앱 프론트의 모든 기능 개발'
					],
          skills: [
            {
              icon: 'images/nuxt.svg',
              name: 'Nuxt'
            },
            {
              icon: 'images/vue.svg',
              name: 'VueX'
            },
            {
              icon: 'images/javascript.svg',
              name: 'JavaScript'
            }
          ]
        },
        {
          name: '워키도키 iOS, Android Application 유지보수',
          date: '2018.12 ~ 2021.06',
          description: `알바체크 프론트를 웹뷰로 띄워주고 프론트에서 하기 힘든 작업들을 JS Bridge로 연결시키거나 웹쪽 인터페이스와 연결하여 작업하고 있습니다.
					Native Application 전체를 유지보수 및 개발하고 있습니다.`,
					works: [
						'카카오톡, 문자 초대 기능 개발',
						'Push notification 기능을 웹과 연결하는 인터페이스 개발',
						'DeepLink 기능을 웹과 연결하는 인터페이스 개발',
						'Barcode Reader 기능과 웹 연결',
						'JS Brdige를 인터페이스로 구조화',
						'iOS, Android Application의 모든 기능 개발'
					],
					skills: [
						{
							icon: 'images/swift.svg',
							name: 'Swift'
						},
						{
							icon: 'images/kotlin.svg',
							name: 'Kotlin'
						}
					]
				}
			]
		}
	],
	activities: [
		{
			title: '건축정보 모바일서비스 콘텐츠 개발 공모전 최우수상',
			position: 'iOS Developer',
			date: '2019.11 ~ 2020.02',
			description:
				'국토교통부와 한국감정원이 공동개최한 공모전으로 AR을 활용하여 주변 건물에서 교통약자를 위한 시설이 있는지 확인 할 수 있는 앱을 제작했습니다. barrier free 제도에 대해 알게 되었고 AR을 시도하여 서비스를 제작했다는 것에 큰 의의를 두고 있습니다.'
		},
		{
			title: 'KB AppChallenge 대상',
			position: 'iOS Developer',
			date: '2018.11',
			description:
				'KB 금융지주에서 SOPT 회원들을 대상으로 2주 동안 진행된 해커 톤입니다. OpenCV와 Project Oxford를 활용해 영수증 인식기능을 구현했습니다. 간단하게나마 앱 내에서 영상처리 기술을 시도해본 좋은 경험이었던 것 같습니다.'
		},
		{
			title: 'Boost Course Ace 2nd - iOS 프로그래밍',
			position: 'Beta Tester',
			date: '2018.03 ~ 2018.08',
			description:
				'iOS 실무자들에게 코드리뷰를 받으며 프로젝트를 진행하는 부스트 코스의 베타테스터로 활동했었습니다. 별 탈 없이 코스를 완수했으며 코드리뷰를 통해 코드의 구조, 확장성에 대해 고민을 하며 한 단계 더 성장할 수 있었던 기회였습니다.'
		},
		{
			title: 'SOPT 22nd',
			position: 'iOS Part',
			date: '2018.03 ~ 2018.07',
			description: '대학생 연합 IT 벤처 창업 동아리에 가입하여 iOS 개발 파트원으로 활동했습니다. iOS 개발의 기초와 팀원 간의 협업을 배울 수 있었습니다.'
		},
		{
			title: 'Software Maestro 8th',
			position: 'Team Leader',
			date: '2018.11',
			description:
				'소프트웨어 마에스트로 8기를 수료했습니다. DX, DXUT를 활용해 컴포넌트 게임엔진을 제작했습니다. 디자인 패턴과 코드로 작성한 것들이 어떻게 화면에 그려지는지에 대해 알 수 있는 뜻깊은 프로젝트였습니다.'
		},
		{
			title: '2984 Little Brother',
			position: 'Programmer',
			date: '2017.11 ~ 2018.02',
			description:
				'GameJam: Art, Politics and Digital Games에서 수상한 작품입니다. 주한 독일 문화원의 도움으로 독일 A-MAZE / International Playful Media Festival에 전시도 하였습니다. "내가 만든 소프트웨어에 의미를 담음으로써 얼마나 큰 영향력을 줄 수 있을까?"를 생각할 수 있었던 좋은 기회였습니다.'
		},
		{
			title: '우리동네 냥아치',
			position: 'Team Leader',
			date: '2017.08 ~ 2017.12',
			description:
				'인디 게임 카페에서 팀을 모아 제작한 게임입니다. 간단한 게임이었지만, 원격에서 작업하는 것과 모르는 사람들이 모여서 개발한다는 점에서 많은 어려움을 겪었습니다. 현재는 정책 위반으로 잠시 내려놓은 상태이며 약 1달 만에 구글 플레이스토어 5,000명 다운로드, 아케이드 게임 순위 TOP10에 진입했었습니다. 프로젝트의 완료가 얼마나 힘든 것인지 몸소 깨닫게 해준 정말 감사한 프로젝트였습니다.'
		}
	]
}
