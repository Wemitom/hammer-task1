import React, { Component } from 'react';
import { Drawer, Divider } from 'antd';
import { 
	MobileOutlined, 
	UserOutlined, 
	CompassOutlined,
	CalendarOutlined,
	MailOutlined,
	FieldStringOutlined,
	GlobalOutlined
} from '@ant-design/icons';

export class UserView extends Component {
	render() {
		const { data, visible, close} = this.props;
		return (
			<Drawer
				width={300}
				placement="right"
				onClose={close}
				closable={false}
				open={visible}
			>
				<div className="text-center mt-3">
					<h3 className="mt-2 mb-0">{data?.name}</h3>
					<span className="text-muted">{data?.personalInfo.title}</span>
				</div>
				<Divider dashed />
				<div className="">
					<h6 className="text-muted text-uppercase mb-3">Account details</h6>
					<p>
						<UserOutlined />
						<span className="ml-3 text-dark">id: {data?.id}</span>
					</p>
					<p>
						<CalendarOutlined />
						<span className="ml-3 text-dark">Born in {data?.personalInfo.birthday}</span>
					</p>
				</div>
				<div className="mt-5">
					<h6 className="text-muted text-uppercase mb-3">CONTACT</h6>
					<p>
						<MobileOutlined />
						<span className="ml-3 text-dark">{data?.phone}</span>
					</p>
                    <p>
                        <MailOutlined />
                        <span className='ml-3 text-dark'>{data?.email}</span>
                    </p>
					<p>
						<GlobalOutlined />
						<span className="ml-3 text-dark">{data?.website}</span>
					</p>
					<p>
						<CompassOutlined />
						<span className="ml-3 text-dark">{data?.address.city}</span>
					</p>
				</div>
				<div className="mt-5">
					<h6 className="text-muted text-uppercase mb-3">Company</h6>
					<p>
						<FieldStringOutlined />
						<a href="/#" className="ml-3 text-dark">{data?.company.name}</a>
					</p>
					<p>
						<FieldStringOutlined />
						<a href="/#" className="ml-3 text-dark">{data?.company.catchPhrase}</a>
					</p>
				</div>
			</Drawer>
		)
	}
}

export default UserView
