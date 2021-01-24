import * as React from "react";
import Items from "../../components/Users/Items";
import PageTitle from "../../components/Commons/PageTitle";
import Navigation from "../../components/Commons/Navigation";

type Props = {};

type State = {};

class Users extends React.Component<Props, State> {
    render() {
        return (
            <div className="container mx-auto px-6 py-8">
                <PageTitle>Users</PageTitle>
                <div className="my-2 flex sm:flex-row flex-col">
                    <div className="flex flex-row mb-1 sm:mb-0">
                        <div className="relative">
                            <select
                                className="h-full rounded-l-lg border block w-full bg-white border-gray-200
                                cursor-pointer text-gray-700 py-2 px-4 pr-8 leading-tight shadow focus:outline-none
                                focus:bg-white focus:border-gray-400">
                                <option>5</option>
                                <option>10</option>
                                <option>20</option>
                            </select>
                        </div>
                        <div className="relative">
                            <select
                                className="h-full rounded-r border-t border-l-0 sm:rounded-r-none sm:border-r-0 border-r
                                border-b block w-full bg-white border-gray-200 text-gray-700 py-2 px-4 pr-8
                                cursor-pointer leading-tight shadow focus:outline-none focus:border-l focus:border-r
                                focus:bg-white focus:border-gray-400">
                                <option>All</option>
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
                        </div>
                    </div>
                    <div className="block relative">
                        <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                                <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387
                                5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"/>
                            </svg>
                        </span>
                        <input placeholder="Search"
                               className="rounded-r-lg rounded-l sm:rounded-l-none border border-gray-200 border-b block
                               pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700
                               shadow focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <div className="flex flex-col">
                        <div
                            className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                            <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg
                            border-b border-gray-200">
                                <Items items={[]}/>
                            </div>
                        </div>
                        <Navigation/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Users;
